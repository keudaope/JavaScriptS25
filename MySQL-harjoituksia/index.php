<?php
// Näytetään kaikki virheet selaimessa (kehitysvaiheessa tosi hyödyllinen)
error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once 'db.php';   // Tuodaan MySQL-tietokantayhteys

// =======================
// 1. MUOKKAUS & POISTO
// =======================

$editCustomer = null; // Käytetään lomakkeen esitäyttöön (jos muokataan)

// --- POISTO ---
if (isset($_GET['action'], $_GET['id']) && $_GET['action'] === 'delete') {
    $id = (int)$_GET['id'];  // muutetaan id numeroksi

    $stmt = mysqli_prepare($conn, "DELETE FROM asiakkaat WHERE id = ?");
    mysqli_stmt_bind_param($stmt, "i", $id);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);

    // Ohjataan takaisin listaukseen, ettei poisto toistu refreshillä
    header("Location: index.php");
    exit;
}

// --- MUOKKAUS: haetaan yksi tietue muokattavaksi ---
if (isset($_GET['action'], $_GET['id']) && $_GET['action'] === 'edit') {
    $id = (int)$_GET['id'];

    $stmt = mysqli_prepare($conn, "SELECT * FROM asiakkaat WHERE id = ?");
    mysqli_stmt_bind_param($stmt, "i", $id);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    $editCustomer = mysqli_fetch_assoc($result);
    mysqli_free_result($result);
    mysqli_stmt_close($stmt);
}

// ==========================
// 2. LOMAKKEEN TALLENNUS
// ==========================

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['save'])) {

    // Haetaan lomakkeen arvot
    $id               = !empty($_POST['id']) ? (int)$_POST['id'] : null;
    $nimi             = trim($_POST['nimi'] ?? '');
    $osoite           = trim($_POST['osoite'] ?? '');
    $postinumero      = trim($_POST['postinumero'] ?? '');
    $postitoimipaikka = trim($_POST['postitoimipaikka'] ?? '');
    $sahkoposti       = trim($_POST['sahkoposti'] ?? '');
    $puhelin          = trim($_POST['puhelin'] ?? '');

    if ($id) {
        // -------- MUOKKAUS --------
        $stmt = mysqli_prepare($conn, "
            UPDATE asiakkaat SET
                nimi = ?, osoite = ?, postinumero = ?, postitoimipaikka = ?,
                sahkoposti = ?, puhelin = ?
            WHERE id = ?
        ");
        mysqli_stmt_bind_param(
            $stmt,
            "ssssssi",
            $nimi,
            $osoite,
            $postinumero,
            $postitoimipaikka,
            $sahkoposti,
            $puhelin,
            $id
        );
        mysqli_stmt_execute($stmt);
        mysqli_stmt_close($stmt);
    } else {
        // -------- UUSI LISÄYS --------
        $stmt = mysqli_prepare($conn, "
            INSERT INTO asiakkaat
                (nimi, osoite, postinumero, postitoimipaikka, sahkoposti, puhelin)
            VALUES (?, ?, ?, ?, ?, ?)
        ");
        mysqli_stmt_bind_param(
            $stmt,
            "ssssss",
            $nimi,
            $osoite,
            $postinumero,
            $postitoimipaikka,
            $sahkoposti,
            $puhelin
        );
        mysqli_stmt_execute($stmt);
        mysqli_stmt_close($stmt);
    }

    // Ohjataan takaisin sivulle (ettei lomake lähetä uudestaan F5:llä)
    header("Location: index.php");
    exit;
}

// ==========================
// 3. HAKU + SIVUTUS
// ==========================

// Hakusana nimen perusteella (GET-parametri)
$searchTerm = isset($_GET['search_term']) ? trim($_GET['search_term']) : "";

// Kuinka monta asiakasta per sivu
$perPage = 10;

// Nykyinen sivu (oletus 1)
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
if ($page < 1) $page = 1;

// Lasketaan, mistä rivistä aloitetaan
$offset = ($page - 1) * $perPage;

// Lasketaan rivien kokonaismäärä (COUNT)
if (!empty($searchTerm)) {
    $stmt = mysqli_prepare($conn, "SELECT COUNT(*) FROM asiakkaat WHERE nimi LIKE ?");
    $like = "%" . $searchTerm . "%";
    mysqli_stmt_bind_param($stmt, "s", $like);
} else {
    $stmt = mysqli_prepare($conn, "SELECT COUNT(*) FROM asiakkaat");
}

mysqli_stmt_execute($stmt);
mysqli_stmt_bind_result($stmt, $totalRows);
mysqli_stmt_fetch($stmt);
mysqli_stmt_close($stmt);

$totalRows  = (int)$totalRows;
$totalPages = max(1, (int)ceil($totalRows / $perPage));
if ($page > $totalPages) $page = $totalPages;
$offset = ($page - 1) * $perPage; // päivitetään varmuuden vuoksi

// Haetaan tämän sivun asiakkaat
$customers = [];

if (!empty($searchTerm)) {
    $sql = "SELECT * FROM asiakkaat WHERE nimi LIKE ? ORDER BY id DESC LIMIT ? OFFSET ?";
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "sii", $like, $perPage, $offset);
} else {
    $sql = "SELECT * FROM asiakkaat ORDER BY id DESC LIMIT ? OFFSET ?";
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "ii", $perPage, $offset);
}

mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);
while ($row = mysqli_fetch_assoc($result)) {
    $customers[] = $row;
}
mysqli_free_result($result);
mysqli_stmt_close($stmt);

// Pieni apufunktio linkkien rakentamiseen (paginointi)
function build_page_link($page, $searchTerm) {
    $params = ['page' => $page];
    if (!empty($searchTerm)) {
        $params['search_term'] = $searchTerm;
    }
    return 'index.php?' . http_build_query($params);
}
?>
<!DOCTYPE html>
<html lang="fi">
<head>
    <meta charset="UTF-8">
    <title>Asiakasrekisteri</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <h1>Asiakasrekisteri</h1>

    <!-- ======================= -->
    <!-- LOMAKE: LISÄÄ / MUOKKAA -->
    <!-- ======================= -->
    <section class="form-section">
        <h2><?php echo $editCustomer ? "Muokkaa asiakasta" : "Lisää uusi asiakas"; ?></h2>

        <!-- novalidate = selaimen oma HTML5-validointi pois, käytetään omaa JS:ää -->
        <form method="post" action="index.php" class="customer-form" novalidate>
            <input type="hidden" name="id"
                   value="<?php echo htmlspecialchars($editCustomer['id'] ?? ''); ?>">

            <label for="nimi">Nimi</label>
            <input type="text" id="nimi" name="nimi" required
                   value="<?php echo htmlspecialchars($editCustomer['nimi'] ?? ''); ?>">

            <label for="osoite">Lähiosoite</label>
            <input type="text" id="osoite" name="osoite" required
                   value="<?php echo htmlspecialchars($editCustomer['osoite'] ?? ''); ?>">

            <label for="postinumero">Postinumero</label>
            <input type="text" id="postinumero" name="postinumero" required
                   value="<?php echo htmlspecialchars($editCustomer['postinumero'] ?? ''); ?>">

            <label for="postitoimipaikka">Postitoimipaikka</label>
            <input type="text" id="postitoimipaikka" name="postitoimipaikka" required
                   value="<?php echo htmlspecialchars($editCustomer['postitoimipaikka'] ?? ''); ?>">

            <label for="sahkoposti">Sähköposti</label>
            <input type="email" id="sahkoposti" name="sahkoposti"
                   value="<?php echo htmlspecialchars($editCustomer['sahkoposti'] ?? ''); ?>">

            <label for="puhelin">Puhelinnumero</label>
            <input type="text" id="puhelin" name="puhelin"
                   value="<?php echo htmlspecialchars($editCustomer['puhelin'] ?? ''); ?>">

            <div class="buttons">
                <button type="submit" name="save">Tallenna</button>
                <button type="reset">Tyhjennä lomake</button>
            </div>
        </form>
    </section>

    <!-- ====== HAKU ====== -->
    <section class="search-section">
        <h2>Haku</h2>
        <form method="get" action="index.php" class="search-form">
            <input type="text" name="search_term" placeholder="Hae nimen perusteella"
                   value="<?php echo htmlspecialchars($searchTerm); ?>">
            <button type="submit">Hae</button>
            <?php if (!empty($searchTerm)): ?>
                <a class="btn clear-search" href="index.php">Tyhjennä haku</a>
            <?php endif; ?>
        </form>
    </section>

    <!-- ====== LISTAUS ====== -->
    <section class="list-section">
        <h2>Asiakkaat</h2>

        <?php if ($totalRows === 0): ?>
            <p>Ei asiakkaita.</p>
        <?php else: ?>
            <p>
                Asiakkaita yhteensä:
                <?php echo $totalRows; ?>
                (sivu <?php echo $page; ?>/<?php echo $totalPages; ?>)
            </p>

            <table>
                <thead>
                    <tr>
                        <th>Nimi</th>
                        <th>Osoite</th>
                        <th>Postinumero</th>
                        <th>Postitoimipaikka</th>
                        <th>Sähköposti</th>
                        <th>Puhelin</th>
                        <th>Toiminnot</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($customers as $c): ?>
                        <tr>
                            <td><?php echo htmlspecialchars($c['nimi']); ?></td>
                            <td><?php echo htmlspecialchars($c['osoite']); ?></td>
                            <td><?php echo htmlspecialchars($c['postinumero']); ?></td>
                            <td><?php echo htmlspecialchars($c['postitoimipaikka']); ?></td>
                            <td><?php echo htmlspecialchars($c['sahkoposti']); ?></td>
                            <td><?php echo htmlspecialchars($c['puhelin']); ?></td>
                            <td>
                                <a class="btn edit"
                                   href="index.php?action=edit&id=<?php echo (int)$c['id']; ?>">
                                    Muokkaa
                                </a>
                                <a class="btn delete delete-link"
                                   href="index.php?action=delete&id=<?php echo (int)$c['id']; ?>">
                                    Poista
                                </a>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>

            <?php if ($totalPages > 1): ?>
                <div class="pagination">
                    <?php if ($page > 1): ?>
                        <a href="<?php echo build_page_link($page - 1, $searchTerm); ?>">&laquo; Edellinen</a>
                    <?php endif; ?>

                    <?php for ($p = 1; $p <= $totalPages; $p++): ?>
                        <?php if ($p == $page): ?>
                            <span class="current"><?php echo $p; ?></span>
                        <?php else: ?>
                            <a href="<?php echo build_page_link($p, $searchTerm); ?>"><?php echo $p; ?></a>
                        <?php endif; ?>
                    <?php endfor; ?>

                    <?php if ($page < $totalPages): ?>
                        <a href="<?php echo build_page_link($page + 1, $searchTerm); ?>">Seuraava &raquo;</a>
                    <?php endif; ?>
                </div>
            <?php endif; ?>
        <?php endif; ?>
    </section>
</body>
</html>
