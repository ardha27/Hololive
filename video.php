<!doctype html>
<html lang="en">
<?php
    require "header.php";
?>
<div class="container">
    <div class="row mt-3 justify-content-center">
        <div class="col-md-4">
            <h1 class="text-center">Search Video</h1>
            <div class="input-group mt-3 mb-3">
                <input type="text" class="form-control" placeholder="Video name ex: asmr/karaoke..." id="video-input">
                <button class="btn btn-dark" type="submit" id="video-button">Search</button>
            </div>
        </div>
    </div>

    <hr>

    <div class="row row-cols-1 row-cols-md-4 mt-1 px-4 g-4" id="video-list">
        
    </div>
</div>

<?php
    require "footer.php";
?>