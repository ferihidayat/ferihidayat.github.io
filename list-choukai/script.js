$(document).ready(function () {
  var inAccess = localStorage.getItem("inAccess");
  var listChoukai = [{
      "nomor": "1",
      "nama": "Choukai JFT 1",
      "tingkat": "JFT Basic A2",
      "jumlah": "9",
      "link": "choukai-jft1/index.html",
      "access": false,
    },
    {
      "nomor": "2",
      "nama": "Choukai JFT 2",
      "tingkat": "JFT Basic A2",
      "jumlah": "8",
      "link": "choukai-jft2/index.html",
      "access": true,
    },
    {
      "nomor": "3",
      "nama": "Choukai JFT 3",
      "tingkat": "JFT Basic A2",
      "jumlah": "9",
      "link": "choukai-jft3/index.html",
      "access": false,
    },
  ];

  $.each(listChoukai, function (index, item) {
    $("#listchoukai").append(`
      <tr>
        <td>${item.nama}</td>
        <td>${item.tingkat}</td>
        <td>${item.jumlah}</td>
        <td class="table-action text-center"><a href="${item.link}" id="accessbutton-${item.nomor}" style="display: none;" class="btn btn-primary">Buka</a>
        <a onclick="setFocusToInput()" href=javascript: void(0);" id="blockbutton-${item.nomor}" style="display: none;">Masukan Kode</a>
        <a id="block-${item.nomor}" style="display: none;">Tutup</a>
        </td>
      </tr>
    `);

    if (inAccess && (inAccess === "masteradmin" || inAccess === "user")) {
      $("#accessForm").hide();
      $("#accessbutton-" + item.nomor).show();
      $("#blockbutton-" + item.nomor).hide();
      if (item.access === true) {
        $("#block-" + item.nomor).hide();
        $("#blockbutton-" + item.nomor).hide();
        $("#accessbutton-" + item.nomor).show();
      } else {
        $("#block-" + item.nomor).show();
        $("#accessbutton-" + item.nomor).hide();
        $("#blockbutton-" + item.nomor).hide();
      }
    } else {
      $("#accessForm").show();
      $("#accessbutton-" + item.nomor).hide();
      $("#blockbutton-" + item.nomor).show();
    }


  });

  // Handle login form submit
  $("#accessForm").submit(function (event) {
    event.preventDefault();

    // Simpan status akses ke localStorage
    var kodeaccess = $("#kodeaccess").val();

    // Contoh validasi login sederhana
    if (kodeaccess === "masteradmin") {
      localStorage.setItem("inAccess", "masteradmin");
      window.location.href = "index.html";
    } else if (kodeaccess === "user") {
      localStorage.setItem("inAccess", "user");
      window.location.href = "index.html";
    } else {
      $("#accessMessage").text("Silakan cek kembali kode akses.");
    }
  });
});

// Daftar nama website untuk setiap halaman
const websiteNames = {
  index: "Feri Hidayat - List Choukai",
};

// Mendapatkan halaman saat ini
const currentPage = window.location.pathname.split("/").pop().replace(".html", "");

// Mengganti judul dan nama website sesuai dengan halaman saat ini
document.getElementById("website-title").textContent = websiteNames[currentPage];
document.getElementById("website-name").textContent = websiteNames[currentPage];