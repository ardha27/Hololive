function semuaChannel() {
    $.getJSON('https://api.holotools.app/v1/channels/?limit=50', function (data) {
        let channel = data.channels;
        $.each (channel, function(i, data) {
            const formatter = new Intl.NumberFormat('id');
            let subs = formatter.format(data.subscriber_count);
            let view = formatter.format(data.view_count);
            $('#channel-list').append(`
            <div class="col-md-3">
                <div class="card h-100 mb-3">
                <img src="`+data.photo+`" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">`+data.name+`</h5>
                        <p class="card-text" type="number">Subscriber: `+subs+`</p>
                        <p class="card-text">Viewer: `+view+`</p>
                        <div class="btn_group">
                            <a href="https://www.youtube.com/channel/`+data.yt_channel_id+`" target="_blank" class="btn btn-danger">Youtube</a>
                            <a href="https://twitter.com/`+data.twitter_link+`" target="_blank" class="btn btn-primary">Twitter</a>
                        </div>
                    </div>
                </div>
            </div>
            `);
        });
    });
}

semuaChannel();

$('#search-button').on('click', function () {
    $('#channel-list').html('');
    $.ajax({
        url: 'https://api.holotools.app/v1/channels/?limit=50',
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
                    const formatter = new Intl.NumberFormat('id');
                    let subs = formatter.format(data.subscriber_count);
                    let view = formatter.format(data.view_count);
                    $('#channel-list').append(`
                        <div class="col-md-3">
                            <div class="card h-100 mb-3">
                            <img src="`+data.photo+`" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">`+data.name+`</h5>
                                    <p class="card-text" type="number">Subscriber: `+subs+`</p>
                                    <p class="card-text">Viewer: `+view+`</p>
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


    $.getJSON('https://api.holotools.app/v1/live?hide_channel_desc=1&max_upcoming_hours=24', function (data) {
        let live = data.live;
        $.each (live, function(i, data) {
            const formatter = new Intl.NumberFormat('id');
            let view = formatter.format(data.live_viewers);
            $('#live-list').append(`
            <div class="col">
                <div class="card h-100">
                    <iframe allow="fullscreen" class="embed-responsive-item" src="https://www.youtube.com/embed/`+data.yt_video_key+`"></iframe>
                <div class="card-body">
                    <h5 class="card-title">`+data.title+`</h5>
                    <p class="card-text" type="number">Channel: `+data.channel.name+`</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Live Viewers : `+view+`</small>
                </div>
                </div>
            </div>
            `);
        });
    });

    $.getJSON('https://api.holotools.app/v1/live?hide_channel_desc=1&max_upcoming_hours=24', function (data) {
        let upcoming = data.upcoming;
        $.each (upcoming, function(i, data) {
            var starttime = data.live_schedule;
            var date = new Date(starttime);
            $('#upcoming-list').append(`
            <div class="col">
                <div class="card h-100">
                    <iframe allow="fullscreen" class="embed-responsive-item" src="https://www.youtube.com/embed/`+data.yt_video_key+`"></iframe>
                <div class="card-body">
                    <h5 class="card-title">`+data.title+`</h5>
                    <p class="card-text" type="number">Channel: `+data.channel.name+`</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Waktu : `+date+`</small>
                </div>
                </div>
            </div>
            `);
        });
    });
    $.getJSON('https://api.holotools.app/v1/live?lookback_hours=6', function (data) {
        let ended = data.ended;
        $.each (ended, function(i, data) {
            var starttime = data.live_end;
            var date = new Date(starttime);
            $('#ended-list').append(`
            <div class="col">
                <div class="card h-100">
                    <iframe allow="fullscreen" class="embed-responsive-item" src="https://www.youtube.com/embed/`+data.yt_video_key+`"></iframe>
                <div class="card-body">
                    <h5 class="card-title">`+data.title+`</h5>
                    <p class="card-text" type="number">Channel: `+data.channel.name+`</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Waktu : `+date+`</small>
                </div>
                </div>
            </div>
            `);
        });
    });

    $('.nav-link').on('click', function () {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });

    $.getJSON('https://api.holotools.app/v1/channels/?sort=subscriber_count&order=desc&limit=10', function (result) {
        let rank = result.channels;
        console.log(result);
        $.each (rank, function(i, data) {
            const formatter = new Intl.NumberFormat('id');
            let subs = formatter.format(data.subscriber_count);
            let view = formatter.format(data.view_count);
            $('#rank-list').append(`
            <tr>
                <th scope="row">`+i+`</th>
                <td><a href="https://www.youtube.com/channel/`+data.yt_channel_id+`" target="_blank">`+data.name+`</a></td>
                <td>`+subs+`</td>
                <td>`+view+`</td>
            </tr>
            `);
        });
    });

    $('#comment-button').on('click', function () {
        $('#comment-list').html('');
        $.ajax({
            url: 'https://api.holotools.app/v1/comments/search',
            type: 'get',
            dataType: 'json',
            data: {
                'q' : $('#comment-input').val()
            },
            success: function (result) {
                if (result.count >= 1) {
                    let comment = result.comments;
                    console.log(comment);
    
                    $.each(comment, function (i, data) {
                        $('#comment-list').append(`
                            <div class="col-md-3">
                                <div class="card h-100 mb-3">
                                    <iframe allow="fullscreen" class="embed-responsive-item" src="https://www.youtube.com/embed/`+data.yt_video_key+`"></iframe>
                                <div class="card-body">
                                        <h5 class="card-title">`+data.title+`</h5>
                                        <p class="card-text fifty-chars">`+data.comments[0].message+`</p>
                                    </div>
                                </div>
                            </div>
                        `);
                    });
    
                    $('#search-input').val('');
    
                }else {
                    $('#comment-list').html(`
                        <div class="col">
                        <h1 class="text-center">Channel Not Found!</h1>
                        </div>
                    `)
                }
            }
        });
    
    });

    $('#video-button').on('click', function () {
        $('#video-list').html('');
        $.ajax({
            url: 'https://api.holotools.app/v1/videos/',
            type: 'get',
            dataType: 'json',
            data: {
                'title' : $('#video-input').val()
            },
            success: function (result) {
                if (result.count >= 1) {
                    let videos = result.videos;
                    console.log(videos);    
                    $.each(videos, function (i, data) {
                    var starttime = data.published_at;
                    var date = new Date(starttime);
                        $('#video-list').append(`
                            <div class="col-md-3">
                                <div class="card h-100 mb-3">
                                    <iframe allow="fullscreen" class="embed-responsive-item" src="https://www.youtube.com/embed/`+data.yt_video_key+`"></iframe>
                                <div class="card-body">
                                        <h5 class="card-title">`+data.title+`</h5>
                                        <p class="card-text" type="number">Channel: `+data.channel.name+`</p>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-muted">Waktu : `+date+`</small>
                                    </div>
                                </div>
                            </div>
                        `);
                    });
    
                    $('#search-input').val('');
    
                }else {
                    $('#comment-list').html(`
                        <div class="col">
                        <h1 class="text-center">Channel Not Found!</h1>
                        </div>
                    `)
                }
            }
        });
    
    });