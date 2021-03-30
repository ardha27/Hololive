$('#search-button').on('click', function () {
    $('#channel-list').html('');
    $.ajax({
        url: 'https://api.holotools.app/v1/channels/',
        type: 'get',
        dataType: 'json',
        data: {
            'name' : $('#search-input').val()
        },
        success: function (result) {
            if (result.count >= 1) {
                let channels = result.channels;
                console.log(channels);

                $.each(channels, function (i, data) {
                    $('#channel-list').append(`
                        <div class="col-md-3">
                            <div class="card mb-3">
                            <img src="`+data.photo+`" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">`+data.name+`</h5>
                                    <p class="card-text" type="number">Subscriber: `+data.subscriber_count+`</p>
                                    <p class="card-text">Viewer: `+data.view_count+`</p>
                                    <div class="btn_group">
                                        <a href="https://www.youtube.com/channel/`+data.yt_channel_id+`" target="_blank" class="btn btn-danger">Youtube</a>
                                        <a href="https://twitter.com/`+data.twitter_link+`" target="_blank" class="btn btn-primary">Twitter</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `);
                });

                $('#search-input').val('');

            }else {
                $('#channel-list').html(`
                    <div class="col">
                    <h1 class="text-center">Channel Not Found!</h1>
                    </div>
                `)
            }
        }
    });

});