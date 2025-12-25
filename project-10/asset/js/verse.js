
const verseContentBox = document.getElementById("verseSlok");


if (verseContentBox) {
    const params = new URLSearchParams(window.location.search);
    const verseNum = params.get("number");

    fetch(`https://vedicscriptures.github.io/chapter/${verseNum}`)
        .then(response => response.json())
        .then(async slok => {


            verseContentBox.innerHTML = `
                <div class="card w-100 text-center ">
                    <div class="card-body background ">
                        <h4 class="text-grey">
                            Bhagavad Gita chapter:${slok.chapter_number}, Verse ${slok.verse}
                        </h4>
                      
                    </div>
                </div>

                <div class="fs-5 mt-5 text-justify letter-spacing">
                    ${slok.slok}
                </div>
                <div class="fs-5 mt-5 text-justify letter-spacing">
                    ${slok.transliteration}
                </div>
                    
            `;
           
        })

}
