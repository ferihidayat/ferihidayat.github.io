var inAccess = localStorage.getItem("inAccess");
if (inAccess) {
  $(document).ready(function () {
    var choukai = [{
        "nomor": "1",
        "audio": "https://raw.githubusercontent.com/ferihidayat/choukaifile/main/choukai-jft2/mondai1.mp3",
        "mondai": "https://raw.githubusercontent.com/ferihidayat/choukaifile/main/choukai-jft2/mondai1.jpg",
        "kotoba": "四季「しき」：4 musim",
        "text": "ちんさんの国にはどんな季節がありますか。<br>日本と同じです。四季があります。<br>そうですか。<br>でも冬がとても長いです。10月ごろから5月ごろまで冬です。<br>そうなんですか。 ",
        "jawaban": "2",
      },
      {
        "nomor": "2",
        "audio": "https://raw.githubusercontent.com/ferihidayat/choukaifile/main/choukai-jft2/mondai2.mp3",
        "mondai": "https://raw.githubusercontent.com/ferihidayat/choukaifile/main/choukai-jft2/mondai2.jpg",
        "kotoba": "慣れます「なれます」：terbiasa、おかげさまで：berkat doa anda、緑「みどり」：penghijauan、確かに「たしかに」：sudah pasti,  memang",
        "text": "この町には慣れましたか。<br>はい、おかげさまで。<br>どうですかこの町は？<br>そうですね、とてもにぎやかで便利です。<br>そうですか。<br>でも緑がちょっと少ないですね。<br>ああ確かに",
        "jawaban": "2",
      },
      {
        "nomor": "3",
        "audio": "https://raw.githubusercontent.com/ferihidayat/choukaifile/main/choukai-jft2/mondai3.mp3",
        "mondai": "https://raw.githubusercontent.com/ferihidayat/choukaifile/main/choukai-jft2/mondai3.jpg",
        "kotoba": "どの辺「どのへん」：disekitar mana、小島町「こじまちょう」：kota kojima、送る「おくる」：mengantar、信号「しんごう」：lampu lalu lintas、この先に：dari sini/didepan。",
        "text": "ローさん今帰る？<br>はい。<br>家はどの辺？<br>小島町です。小島高校の近くです。<br>じゃあ、車で家まで送るよ。<br>あーすみませんありがとうございます。<br>もうすぐ小島高校だけど、<br>あ！次の信号を左に曲がってください。<br>信号を左ね。<br>この先に白くて大きな家があります、その角を右に入ってください。<br>OK。<br>あ！ここでいいです。<br>え？ここ？<br>はい、ここです。<br>今日はありがとうございました。<br>じゃあお疲れ様、おやすみ。<br>おやすみなさい、失礼します。",
        "jawaban": "1",
      },
      {
        "nomor": "4",
        "audio": "https://raw.githubusercontent.com/ferihidayat/choukaifile/main/choukai-jft2/mondai4&5.mp3",
        "mondai": "https://raw.githubusercontent.com/ferihidayat/choukaifile/main/choukai-jft2/mondai4&5.jpg",
        "kotoba": "待ち合わせ「まちあわせ」：bertemu(singgah:berhenti sebentar)、平和「へいわ」：perdamaian/damai、鳥「とり」：burung、像「ぞう」：patung、改札「かいさつ」：pemeriksaan karcis、改札集合「かいさつしゅうごう」：tempat berkumpul pemeriksaan karcis。",
        "text": "明日何時にしますか。<br>6時はどうですか。<br>6時はちょっと早いです、6時半でもいいですか。<br>6時半？いいですよ。<br>じゃあ、そうしましょう。待ち合わせして一緒に行きますか。<br>そうしましょう。どこにしますか。<br>じゃあ駅前の平和の鳥の像の前にしましょう。<br>えそれ何ですか。<br>私もわかりません。駅の改札でもいいですか。<br>じゃあ、そうしましょう。<br>6時半に駅の改札集合で。<br>はい、わかりました。<br>",
        "jawaban": "2　&　1",
      },
      {
        "nomor": "5",
        "audio": "https://raw.githubusercontent.com/ferihidayat/choukaifile/main/choukai-jft2/mondai6.mp3",
        "mondai": "https://raw.githubusercontent.com/ferihidayat/choukaifile/main/choukai-jft2/mondai6.jpg",
        "kotoba": "フードコート：food court(tempat jajanan)、おろす：menarik/mengambil(uang)、ジョギングシューズ：sepatu joging、ゲームコーナー：area permainan。",
        "text": "「歩きながら」<br>この後どうしますか。<br>お腹がすきましたね、何か食べませんか。<br>じゃあ、フードコートに行きましょう。<br>食事の前にお金をおろしたいんですが、<br>あそこにATMがありますよ。<br>「フードコートで」<br>このあとジョギングシューズを買いたいんですが、<br>じゃあ、スポーツ店に行きましょう。<br>買い物のあとでゲームコーナーに行きませんか。<br>いいですね。<br>じゃあ、行きましょうか。<br>その前にちょっとトイレ。",
        "jawaban": "3",
      },
      {
        "nomor": "6",
        "audio": "https://raw.githubusercontent.com/ferihidayat/choukaifile/main/choukai-jft2/mondai7.mp3",
        "mondai": "https://raw.githubusercontent.com/ferihidayat/choukaifile/main/choukai-jft2/mondai7.jpg",
        "kotoba": "公民館「こうみんかん」：balai kota、ただです：gratis/cuma-cuma、教科書「きょうかしょ」：buku pelajaran、チラシ：pamflet.",
        "text": "ゆりあさん、ちょっといいですか。<br>はい。<br>今、日本語の教室にいっていますか。<br>はい、元町公民館の日本語教室で勉強しています。<br>私ももっと日本語を勉強したいんですが、クラスはどうですか。<br>楽しいですよ。<br>週に何回ありますか。<br>私のクラスは週に一回です。火曜日の夜です。<br>何時からですか。<br>7時から8時半です。土曜日の午前のクラスもありますよ。<br>いくらですか。<br>ただです。でも教科書は自分で買います。<br>そうですか。先生はどんな先生ですか。<br>いろいろな先生がいます。みんな親切ですよ。<br>へえ<br>今度教室のチラシを持ってきましょうか。<br>ありがとうございます。じゃあ、お願いします。",
        "jawaban": "1",
      },
      {
        "nomor": "7",
        "audio": "https://raw.githubusercontent.com/ferihidayat/choukaifile/main/choukai-jft2/mondai8.mp3",
        "mondai": "https://raw.githubusercontent.com/ferihidayat/choukaifile/main/choukai-jft2/mondai8.jpg",
        "kotoba": "おにぎり：nasi kepal.",
        "text": "じゃあ、私はおにぎりを作っていきますね。<br>いいですね。じゃあ、長谷川さんはおにぎりをお願いします。<br>コップやお皿はどうしますか。<br>それはバーベキュー場にありますから、大丈夫です。",
        "jawaban": "3",
      }
    ];

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
  index: "Feri Hidayat - Choukai JFT 2",
  admin: "Feri Hidayat - Admin Master",
};

const currentPage = window.location.pathname.split("/").pop().replace(".html", "");

// Mengganti judul dan nama website sesuai dengan halaman saat ini
document.getElementById("website-title").textContent = websiteNames[currentPage];
document.getElementById("website-name").textContent = websiteNames[currentPage];