//  the chapters
async function fetchChapters() {
    const res = await fetch('https://vedicscriptures.github.io/chapters');
    const data = await res.json();

    let chapter = "";

    data.forEach(ch => {
        chapter += `
            <div class="col-4 ">
                <div class="card h-100" onclick=chapterNew(${ch.chapter_number})>
                    <div class="card-body">
                        <h5 class="card-title">Chapter:${ch.chapter_number}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${ch.transliteration}</h6>
                        <p class="card-text w-100 mb-3 ">
                        ${ch.summary.en.slice(0, 70)}...</p>
                         <span class="card-text  w-100">
                            <i class="bi bi-list-ul"></i>
                            ${ch.verses_count} Verses
                        </span>
                        
                    </div>
            </div>
            </div>
        
    `;
    });

    document.getElementById("chapters").innerHTML = chapter;

}

fetchChapters();

