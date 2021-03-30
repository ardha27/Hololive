<!doctype html>
<html lang="en">
<?php
    require "header.php";
?>
<div class="container">
    <h1 class="text-center mt-3">Top 10 Subscriber</h1>
    <div class="row row-cols-1 row-cols-md-4 mt-1 px-4 g-4">
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Subscriber</th>
                    <th scope="col">Viewer</th>
                </tr>
                </thead>
            <tbody id="rank-list">

            </tbody>
        </table>
    </div>
</div>
<?php
    require "footer.php";
?>