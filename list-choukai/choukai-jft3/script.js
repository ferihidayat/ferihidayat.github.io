var inAccess = localStorage.getItem("inAccess");
if (inAccess) {
  $(document).ready(function () {
    var choukai = [{
        "nomor": "1",
        "audio": "https://raw.githubusercontent.com/ferihidayat/choukaifile/main/choukai-jft3/mondai1.mp3",
        "mondai": "https://raw.githubusercontent.com/ferihidayat/choukaifile/main/choukai-jft3/mondai1.jpg",
      },
      {
        "nomor": "2",
        "audio": "https://raw.githubusercontent.com/ferihidayat/choukaifile/main/choukai-jft3/mondai2.mp3",
        "mondai": "https://raw.githubusercontent.com/ferihidayat/choukaifile/main/choukai-jft3/mondai2.jpg",
      },
      {
        "nomor": "3",
        "audio": "https://raw.githubusercontent.com/ferihidayat/choukaifile/main/choukai-jft3/mondai3.mp3",
        "mondai": "https://raw.githubusercontent.com/ferihidayat/choukaifile/main/choukai-jft3/mondai3.jpg",
      },
      {
        "nomor": "4",
        "audio": "https://raw.githubusercontent.com/ferihidayat/choukaifile/main/choukai-jft3/mondai4.mp3",
        "mondai": "https://raw.githubusercontent.com/ferihidayat/choukaifile/main/choukai-jft3/mondai4.jpg",
      },
      {
        "nomor": "5",
        "audio": "https://raw.githubusercontent.com/ferihidayat/choukaifile/main/choukai-jft3/mondai5.mp3",
        "mondai": "https://raw.githubusercontent.com/ferihidayat/choukaifile/main/choukai-jft3/mondai5.jpg",
      },
      {
        "nomor": "6",
        "audio": "https://raw.githubusercontent.com/ferihidayat/choukaifile/main/choukai-jft3/mondai6.mp3",
        "mondai": "https://raw.githubusercontent.com/ferihidayat/choukaifile/main/choukai-jft3/mondai6.jpg",
      },
      {
        "nomor": "8",
        "audio": "https://raw.githubusercontent.com/ferihidayat/choukaifile/main/choukai-jft3/mondai7&8.mp3",
        "mondai": "https://raw.githubusercontent.com/ferihidayat/choukaifile/main/choukai-jft3/mondai7&8.jpg",
      }
    ];

    // Redirect ke halaman yang sesuai dengan status akses
    if (inAccess === "masteradmin") {
      $.each(choukai, function (index, item) {
        $("#resultuser").append(`
        <div class="col-12">
          <div class="card d-block">
            <div class="card-body position-relative">
              <div class="row mb-0">
                <div class="col-1">
                  <h3 class="mt-0 ml-2 text-center">${item.nomor}</h3>
                </div>
                <div class="col-11">
                  <audio style="width: 100%;" controls>
                    <source src="${item.audio}" type="audio/mpeg">
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
            </div>
             <ul class="nav nav-tabs nav-bordered mb-3">
                  <li class="nav-item">
                    <a href="#mondaiJP${item.nomor}" data-bs-toggle="tab" aria-expanded="false" class="nav-link active">
                      Gambar
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#pembahasanJP${item.nomor}" data-bs-toggle="tab" aria-expanded="true" class="nav-link">
                      Pembahasan
                    </a>
                  </li>
                </ul> <!-- end nav-->
                 <div class="tab-content">
                  <div class="tab-pane show active" id="mondaiJP${item.nomor}">
                   <a href="${item.mondai}"><img class="card-img-top" src="${item.mondai}" alt="Choukai Image"></a>
                  </div> <!-- end preview-->

                  <div class="tab-pane p-3" id="pembahasanJP${item.nomor}">
                  <h5 style="font-family:Calibri,sans-serif"><span
                style="font-family:&quot;Yu Gothic Medium&quot;,sans-serif">${item.text}</span></h5>
                  <strong>Kosakata</strong><br>
                    <h5 style="font-family:Calibri,sans-serif"><span
                style="font-family:&quot;Yu Gothic Medium&quot;,sans-serif">${item.kotoba}</span></h5>
                  <strong style="font-family:Calibri,sans-serif"><span
                style="font-family:&quot;Yu Gothic Medium&quot;,sans-serif">Jawaban : ${item.jawaban}</span></strong>
                  </div> 
                </div> 
           
          
          </div>
        </div>
      `);
      });

    } else {
      $.each(choukai, function (index, item) {
        $("#resultuser").append(`
        <div class="col-12">
          <div class="card d-block">
            <div class="card-body position-relative">
              <div class="row mb-0">
                <div class="col-1">
                  <h3 class="mt-0 ml-2 text-center">${item.nomor}</h3>
                </div>
                <div class="col-11">
                  Audio dibatasi admin
                </div>
              </div>
            </div>
            <a href="${item.mondai}"><img class="card-img-top" src="${item.mondai}" alt="Choukai Image"></a> 
          </div>
        </div>
        
      `);
      });
    }


  });
} else {
  window.location.href = "../index.html";
}

const websiteNames = {
  index: "Feri Hidayat - Choukai JFT 3",
  admin: "Feri Hidayat - Admin Master",
};

const currentPage = window.location.pathname.split("/").pop().replace(".html", "");

// Mengganti judul dan nama website sesuai dengan halaman saat ini
document.getElementById("website-title").textContent = websiteNames[currentPage];
document.getElementById("website-name").textContent = websiteNames[currentPage];