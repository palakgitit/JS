// shlok loop
let shlok = [

    "Perform your duty without attachment to results. When actions are done selflessly, they purify the mind and lead toward inner freedom.",
    "The soul is eternal and cannot be destroyed. The body may perish, but the true self is beyond birth, death, and change.",
    "Those who worship the Divine with faith and love are protected and guided. Pure devotion brings the soul closer to the Supreme..",
    "True knowledge removes ignorance and reveals the unity of all beings. Wisdom leads one to see the same Divine presence everywhere.",
    "A restless mind can be disciplined through practice and detachment. Mastery over the mind leads to peace and clarity."
]

let index = 0;

function showSlok() {
    document.getElementById("shlokbox").innerText = shlok[index];
    index++;

    if (index >= shlok.length) {
        index = 0;
    }
}


setInterval(showSlok, 360000);
showSlok();

//  the chapters
async function fetchChapters() {
    const res = await fetch('https://vedicscriptures.github.io/chapters');
    const data = await res.json();

    let chapter = "";

    data.forEach(ch => {
        chapter += `
            <div class="col-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Chapter:${ch.chapter_number}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${ch.transliteration}</h6>
                        <p class="card-text w-100 mb-3 ">
                        ${ch.summary.en.slice(0, 70)}...</p>
                        <a href="./chapter.html" class="btn btn-primary card-link">Read Chapter</a>
                        
                    </div>
            </div>
            </div>
        
    `;
    });

    document.getElementById("chapters").innerHTML = chapter;
}

fetchChapters();

function chapterNew(chapterNO){

    window.location.href = `chapter.html?number=${chapterNO}`;
}
if (document.getElementById("summary-detail")){

    const params = new URLSearchParams(window.location.search);
    const chapterNO = params.get("number");

    fetch(`https://vedicscriptures.github.io/chapter/${chapterNO}`)
        .then(response => response.json())
        .then(data => {

            document.getElementById("summary-detail").innerHTML= `

            <div >
                <div class="summaryBox-title">
                    Chapter ${data.chapter_number}
                </div>
                <h6 class="card-subtitle mb-2 text-body-secondary">${ch.transliteration}</h6>
                        <p class="card-text w-100 mb-3 ">
                        ${ch.summary.hi.slice(0, 70)}...</p>
                       
            
            </div>
            
            `
        });

}
