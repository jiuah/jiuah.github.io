function newStream(name) {
    switch (name) {
        case 'Menara Fm [NL]':
            changeStream('http://server.menara-fm.com:10280/menarafmbali');
            break;
        case 'Bali United [NL]':
            changeStream('http://sgp1.onlivestreaming.net:10690/stream');
            break;
        case 'The Beat [NL]':
            changeStream('https://c1.siar.us/radio/8030/stream');
            break;
        case 'Genta Bali [NL]':
            changeStream('http://stream.werdimedia.com:8200/;');
            break;
        case 'HardRock Bali [NL]':
            changeStream('https://n0e.radiojar.com/9k28wsbu5k8uv?rj-ttl=5&rj-tok=AAABfnfOzLEA-9erHfDHiFl2OQ');
            break;
        case 'Pinguin Bali [NL]':
            changeStream('https://live.radiopinguinfm.com/');
            break;
        case 'RDI [NL]':
            changeStream('http://202.147.199.99:8000/stream/1/');
            break;
        case 'Mustang [NL]':
            changeStream('https://wz.mari.co.id/web_mustangfm/mustangfm/chunklist_w258902658.m3u8');
            break;
        case 'Geronimo [NL]':
            changeStream('http://live2.indostreamserver.com:8018/;');
            break;
        case 'rri pro 2 [NL]':
            changeStream('https://cdndenpasarpro2.rri.co.id/web-rridenpasarpro2.mp3');
            break;
        case 'Radio 538 [NL]':
            changeStream('https://22723.live.streamtheworld.com/RADIO538.mp3');
            break;
        case 'QMusic [NL]':
            changeStream('http://icecast-qmusicnl-cdp.triple-it.nl/Qmusic_nl_live_32.aac');
            break;
        case 'Slam! [NL]':
            changeStream('https://21273.live.streamtheworld.com/SLAM_MP3_SC?');
            break;
        case 'Radio Comercial [PT]':
            changeStream('http://mcrscast.mcr.iol.pt/comercial?.aac');
            break;
        case 'RFM [PT]':
            changeStream('https://20073.live.streamtheworld.com/RFMAAC.aac');
            break;
        case 'RFM Oceano Pacífico [PT]':
            changeStream('https://20723.live.streamtheworld.com/OCEANPACIFICAAC.aac');
            break;
        case 'CidadeFM [PT]':
            changeStream('http://mcrscast.mcr.iol.pt/cidadefm?.aac');
            break;
        case 'HiperFM [PT]':
            changeStream('https://centova.radio.com.pt/proxy/500?mp=/stream');
            break;
        case 'Radio Veronica [NL]':
            changeStream('http://playerservices.streamtheworld.com/api/livestream-redirect/VERONICA.mp3');
            break;
        case 'HitFM [N/A]':
            changeStream('http://stream.zeno.fm/88ck6ggfqm0uv');
            break;
    }
    document.getElementById('cp').innerHTML = "Currently selected: " + name;
    document.getElementById('title').innerHTML = name + " @ Pafias | Radio";
}

function setBackground(name) {
    switch (name) {
        case 'skyblue':
            document.body.style.background = 'url("skyblue.png")';
            break;
        case 'pinkpurple':
            document.body.style.background = 'url("pinkpurple.png")';
            break;
        case 'orangered':
            document.body.style.background = 'url("orangered.png")';
            break;
        case 'limegreen':
            document.body.style.background = 'url("limegreen.png")';
            break;
        case 'colorful':
            document.body.style.background = 'url("colorful.png")';
            break;
    }
    document.body.style.backgroundSize = '100% 100%';
}

function changeStream(link) {
    var audio = document.getElementById('audio');
    var source = document.getElementById('source');
    source.src = link;
    audio.pause();
    audio.load();
    audio.play();
}

function hideControls() {
    document.getElementById('audio').controls = false;
}

function showControls() {
    document.getElementById('audio').controls = true;
}dio = document.getElementById('audio');
    var source = document.getElementById('source');
    source.src = link;
    audio.pause();
    audio.load();
    audio.play();
}

function hideControls() {
    document.getElementById('audio').controls = false;
}

function showControls() {
    document.getElementById('audio').controls = true;
}