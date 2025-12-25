

const verseContentBox = document.getElementById("verseSlok");

if (verseContentBox) {
    const params = new URLSearchParams(window.location.search);
    const verseNum = params.get("verse");
    const chapterNO = params.get("chapter");

    fetch(`https://vedicscriptures.github.io/slok/${chapterNO}/${verseNum}/`)
        .then(response => response.json())
        .then( slok => {


            verseContentBox.innerHTML = `


                <div class="card  text-center  ">
                    <div class="card-body  w-auto background ">
                        <h4 class="text-grey">
                            Bhagavad Gita chapter:${slok.chapter}, Verse ${slok.verse}
                        </h4>
                      
                    </div>
                </div>
                <div class="card slokSummary">
                    <div class="card-body">                
                        <p class="card-text fs-5 mt-5 text-justify letter-spacing primary-text">
                              ${slok.slok}
                        </p>
                        <p class="card-text fs-5 mt-5 text-justify letter-spacing text-grey">
                        ${slok.transliteration}
                        </p>  
                    </div>
                </div>
             
                
            `;
        })
}
