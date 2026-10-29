import { site } from "@/config/site";

export type FaqItem = { q: string; a: string };

export type Service = {
  slug: string;
  navLabel: string;
  cardTitle: string;
  cardSummary: string;
  title: string; // H1
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string;
  /** Birincil aksiyon: rehabilitasyonda telefon, diğerlerinde WhatsApp */
  primaryAction: "whatsapp" | "phone";
  whatsappContext: string;
  forWhom: string[];
  notForWhom: string[];
  programTitle: string;
  program: { title: string; text: string }[];
  processTitle: string;
  process: { step: string; text: string }[];
  conditions: string[];
  faq: FaqItem[];
};

export const services: Service[] = [
  {
    slug: "kopek-egitimi-ankara",
    navLabel: "Köpek Eğitimi",
    cardTitle: "Köpek Eğitimi",
    cardSummary:
      "Temel itaat, günlük yaşam becerileri ve sahibiyle birlikte çalışma. Programın içeriği köpeğin yaşına ve mevcut davranışına göre belirlenir.",
    title: "Ankara'da Köpek Eğitimi",
    metaTitle: "Köpek Eğitimi Ankara | Barkyard Köpek Eğitim Merkezi",
    metaDescription:
      "Ankara'da köpek eğitimi. Temel itaat, günlük yaşam becerileri ve davranış çalışması. Tesiste ve sahibiyle birlikte yürütülen program. WhatsApp'tan bilgi alın.",
    heroImage: "/images/hizmetler/kopek-egitimi.jpg",
    heroImageAlt: "Eğitim çalışmasında oturan köpek",
    intro:
      "Eğitim, köpeğe komut ezberletmek değil; köpeğin ve sahibinin aynı dili konuşmasını sağlamaktır. Barkyard'da her program, köpeğin yaşı, geçmişi ve yaşadığı ortam değerlendirildikten sonra kurulur. Sahibi süreç dışında bırakılmaz — eğitimin kalıcı olması, evde de aynı şekilde sürdürülmesine bağlıdır.",
    primaryAction: "whatsapp",
    whatsappContext: "köpek eğitimi",
    forWhom: [
      "Temel itaat ve günlük yaşam kurallarını öğrenmesi gereken yavru ve yetişkin köpekler",
      "Tasmayla yürüyüş, çağırınca gelme, bekleme gibi pratik becerilerde zorlanan köpekler",
      "Ev içi kurallar, tuvalet alışkanlığı ve misafir davranışı üzerine çalışılması gerekenler",
      "Sahibiyle iletişim kurmakta zorlanan, aşırı hareketli veya odaklanamayan köpekler",
    ],
    notForWhom: [
      "Ciddi saldırganlık, ısırma geçmişi veya yoğun korku davranışı gösteren köpekler — bu durumlar rehabilitasyon programına yönlendirilir",
      "Aşıları tamamlanmamış yavrular — sağlık takvimi tamamlanana kadar bekleriz",
      "Sahibinin süreçte yer almayacağı, \"köpeği bırakıp eğitilmiş halde almak\" beklentisi olan talepler",
    ],
    programTitle: "Program içeriği",
    program: [
      { title: "Değerlendirme", text: "İlk buluşmada köpeğin mevcut davranışı, yaşadığı ortam ve sahibinin beklentisi konuşulur. Program bu görüşmeden sonra yazılır." },
      { title: "Temel iletişim", text: "Odaklanma, isim tepkisi, ödül ve yönlendirmenin doğru kullanımı. Tüm çalışmanın üzerine kurulduğu katman." },
      { title: "Temel komutlar", text: "Otur, yat, bekle, yanımda yürü, çağırınca gel. Önce sakin ortamda, sonra dikkat dağıtıcı ortamda." },
      { title: "Günlük yaşam becerileri", text: "Tasma ile düzgün yürüyüş, kapı ve misafir davranışı, araç, veteriner ve tımar rutinlerine alışma." },
      { title: "Sahibiyle aktarım seansları", text: "Köpeğin öğrendiğini sahibiyle tekrar etmesi. Bu adım atlanırsa eğitim eve taşınmaz." },
      { title: "Takip", text: "Program bitiminde ne yapılacağı yazılı olarak verilir ve belirli aralıklarla kontrol seansı planlanır." },
    ],
    processTitle: "Nasıl ilerliyor",
    process: [
      { step: "Ön görüşme", text: "WhatsApp veya telefonla köpeğinizi ve ihtiyacınızı anlatırsınız. Doğru yer olup olmadığımızı açıkça söyleriz." },
      { step: "Tesiste tanışma", text: "Köpeğinizle birlikte gelirsiniz. Tesisi görür, eğitmenle tanışırsınız." },
      { step: "Program", text: "Belirlenen içerik ve süreyle çalışma başlar. Süreç boyunca düzenli bilgilendirilirsiniz." },
      { step: "Aktarım ve teslim", text: "Öğrenilenler sizinle birlikte tekrar edilir, evde uygulanacaklar yazılı olarak verilir." },
    ],
    conditions: [
      "Aşı ve iç/dış parazit uygulamaları güncel olmalıdır",
      "Karne veya veteriner kaydı ilk gelişte görülür",
      "Kısırlaştırma zorunlu değildir; kızgınlık dönemindeki dişiler için program tarihi birlikte planlanır",
    ],
    faq: [
      { q: "Eğitim ne kadar sürer?", a: "Programın süresi köpeğin mevcut durumuna ve hedefe göre değişir. Temel itaat çalışmaları genellikle haftalar ölçeğinde ilerler; davranış problemleri daha uzun sürebilir. Ön görüşmede size gerçekçi bir süre söyleriz — kesin gün sayısı vaat eden yaklaşımlara temkinli yaklaşın." },
      { q: "Köpeğimi bırakıp eğitilmiş şekilde alabilir miyim?", a: "Köpek tesiste kalarak da çalışabilir, ancak süreci sizin katılımınız olmadan tamamlamayız. Köpek burada öğrendiğini evde sürdüremezse eğitim kalıcı olmaz. Bu yüzden aktarım seansları programın zorunlu parçasıdır." },
      { q: "Hangi yöntemi kullanıyorsunuz?", a: "Ödül ve yönlendirme temelli çalışıyoruz. Köpeğin öğrenmesini korkuya dayandıran yöntemler kullanmıyoruz. Kullandığımız her aracı ve nedenini size açıkça anlatırız." },
      { q: "Yavru köpek kaç aylıkken başlayabilir?", a: "Aşı takvimi tamamlandıktan sonra erken başlamak en verimlisidir. Aşı süreci devam ederken de evde yapabileceğiniz çalışmalar için yönlendirme veririz." },
      { q: "Eğitim sırasında köpeğimi görebilir miyim?", a: "Evet. Tesiste kalan köpekler için ziyaret ve düzenli görsel bilgilendirme yapılır. Görmenize izin verilmeyen bir yerde köpeğinizi bırakmayın." },
    ],
  },
  {
    slug: "kopek-oteli-ankara",
    navLabel: "Köpek Oteli",
    cardTitle: "Köpek Oteli / Pansiyon",
    cardSummary:
      "Tatil, seyahat veya iş nedeniyle şehir dışına çıktığınızda köpeğinizin kalabileceği, bahçeli ve gözetimli konaklama.",
    title: "Ankara Köpek Oteli ve Pansiyonu",
    metaTitle: "Köpek Oteli Ankara | Köpek Pansiyonu — Barkyard Ankara",
    metaDescription:
      "Ankara'da bahçeli, gözetimli köpek oteli ve pansiyonu. Günlük rutin, açık alan ve düzenli bilgilendirme. Yer ve tarih için WhatsApp'tan yazın.",
    heroImage: "/images/hizmetler/kopek-oteli.jpg",
    heroImageAlt: "Yatağında dinlenen köpek",
    intro:
      "Köpeğinizi birine emanet etmek, verdiğiniz en zor kararlardan biridir. Barkyard bu kararı kolaylaştırmak için tek bir şey yapar: her şeyi göstermek. Tesisi gezmeden, kalacağı yeri görmeden ve günlük rutini öğrenmeden rezervasyon yapmanızı beklemiyoruz.",
    primaryAction: "whatsapp",
    whatsappContext: "köpek oteli ve konaklama",
    forWhom: [
      "Tatil, seyahat veya iş seyahati boyunca köpeğine güvenli bir yer arayanlar",
      "Evde yalnız kalmakta zorlanan, sosyal ortamdan fayda görecek köpekler",
      "Taşınma, tadilat gibi geçici dönemlerde konaklama ihtiyacı olanlar",
      "Uzun süreli konaklama sırasında hafif eğitim desteği de isteyenler",
    ],
    notForWhom: [
      "Diğer köpeklere karşı ciddi saldırganlık gösteren köpekler — bu durumda ayrı değerlendirme ve farklı bir düzen gerekir",
      "Aşıları eksik veya bulaşıcı hastalık şüphesi olan köpekler",
      "Sürekli ilaç ve yakın tıbbi takip gerektiren, veteriner gözetimi şart olan durumlar",
    ],
    programTitle: "Günlük akış",
    program: [
      { title: "Sabah", text: "Uyanış, tuvalet çıkışı, kahvaltı ve genel sağlık gözlemi." },
      { title: "Öğlen öncesi", text: "Bahçede serbest zaman, koşu ve oyun. Köpekler uyumlarına göre gruplandırılır veya bireysel çıkarılır." },
      { title: "Öğlen", text: "Dinlenme saati. Sakin ortam, gölge ve su." },
      { title: "Öğleden sonra", text: "İkinci açık alan seansı, oyun ve varsa hafif çalışma." },
      { title: "Akşam", text: "Akşam yemeği, son tuvalet çıkışı, tarama ve gece düzenine geçiş." },
      { title: "Bilgilendirme", text: "Konaklama boyunca fotoğraf ve durum bilgisi paylaşılır. Merak edip sormanızı beklemeyiz." },
    ],
    processTitle: "Rezervasyon nasıl yapılır",
    process: [
      { step: "Tarih ve doluluk", text: "WhatsApp'tan tarihleri yazarsınız, kapasite durumunu aynı gün bildiririz." },
      { step: "Tesis ziyareti", text: "Konaklama öncesi tesisi gezmenizi öneriyoruz. Köpeğiniz de ortamı önceden tanımış olur." },
      { step: "Bilgi formu", text: "Beslenme düzeni, alışkanlıklar, ilaçlar, veteriner bilgisi ve acil durumda ulaşılacak kişi kayda alınır." },
      { step: "Konaklama", text: "Köpeğiniz kalır, siz düzenli bilgilendirilirsiniz. Teslimde nasıl geçtiğini birlikte değerlendiririz." },
    ],
    conditions: [
      "Karma ve kuduz aşıları güncel olmalı, karne ile belgelenmelidir",
      "İç ve dış parazit uygulaması konaklama öncesinde yapılmış olmalıdır",
      "Köpeğinizin alıştığı mama ile gelmesi, mide düzeninin bozulmaması için önerilir",
      "Düzenli kullandığı ilaç varsa dozu ve saatiyle birlikte yazılı olarak bildirilmelidir",
    ],
    faq: [
      { q: "Köpeğim nerede uyuyor?", a: "Her köpeğin kendi ayrılmış alanı vardır; grup düzeninde ortak alan kullanımı köpeklerin uyumuna göre belirlenir. Kalacağı yeri konaklamadan önce yerinde görebilirsiniz." },
      { q: "Günde ne kadar dışarı çıkıyor?", a: "Günlük akışta en az iki açık alan seansı vardır. Süre havaya, köpeğin enerjisine ve grubun durumuna göre değişir." },
      { q: "Köpeğim hastalanırsa ne oluyor?", a: "Kayıtlı veterineriniz ve acil durumda ulaşılacak kişi bilgisi konaklama öncesinde alınır. Bir sorun olduğunda önce size haber verilir; ulaşılamayan acil durumlarda köpeğinizin sağlığı önceliklidir ve veterinere götürülür." },
      { q: "Kendi mamasını getirebilir miyim?", a: "Sadece getirebilirsiniz — getirmenizi öneriyoruz. Ani mama değişikliği sindirim sorunu yaratır." },
      { q: "Konaklama sırasında bilgi alabiliyor muyum?", a: "Evet, düzenli fotoğraf ve durum bilgisi paylaşırız. Ayrıca istediğiniz zaman yazıp sorabilirsiniz." },
      { q: "Kaç gün önceden rezervasyon yapmalıyım?", a: "Bayram ve yaz dönemi gibi yoğun tarihlerde kapasite erken doluyor; bu dönemler için mümkün olduğunca önceden yazın." },
    ],
  },
  {
    slug: "kopek-gunduz-bakim-ankara",
    navLabel: "Gündüz Bakım",
    cardTitle: "Gündüz Bakım",
    cardSummary:
      "Siz işteyken köpeğiniz evde yalnız kalmak yerine gününü hareket, oyun ve düzenli rutinle geçirir. Gün sonunda size döner.",
    title: "Ankara'da Köpek Gündüz Bakımı",
    metaTitle: "Köpek Gündüz Bakım Ankara | Köpek Kreşi — Barkyard Ankara",
    metaDescription:
      "Ankara'da köpek gündüz bakımı. Siz işteyken köpeğiniz hareket, oyun ve düzenli rutin içinde gününü geçirir. Deneme günü için WhatsApp'tan yazın.",
    heroImage: "/images/hizmetler/gunduz-bakim.jpg",
    heroImageAlt: "Çimenlikte oynayan köpekler",
    intro:
      "Gün boyu evde yalnız kalan bir köpeğin enerjisi kaybolmaz; akşam eve döndüğünüzde başka bir biçimde karşınıza çıkar. Gündüz bakım, bu enerjinin gün içinde doğru şekilde harcanmasını sağlar. Köpeğiniz sabah gelir, günü hareket ve sosyal ortamda geçirir, akşam yorulmuş ve sakin şekilde eve döner.",
    primaryAction: "whatsapp",
    whatsappContext: "gündüz bakım",
    forWhom: [
      "Gün boyu evde yalnız kalan, enerjisini atamayan köpekler",
      "Yalnız kaldığında havlama, kemirme, huzursuzluk gösteren köpekler",
      "Sosyalleşmeye ihtiyacı olan yavru ve genç köpekler",
      "Yoğun çalışan, gün içinde köpeğine yeterli hareket sağlayamayan sahipler",
    ],
    notForWhom: [
      "Diğer köpeklerle grup ortamına uyum sağlayamayan köpekler — önce bireysel değerlendirme gerekir",
      "Aşıları eksik olan köpekler",
      "Yoğun korku veya saldırganlık davranışı olanlar; bu durumda önce rehabilitasyon konuşulur",
    ],
    programTitle: "Gün nasıl geçiyor",
    program: [
      { title: "Karşılama", text: "Sabah gelişte kısa sağlık ve ruh hali kontrolü, gruba yumuşak geçiş." },
      { title: "Hareket seansı", text: "Açık alanda koşu ve oyun. Gruplar bedene, yaşa ve oyun tarzına göre ayrılır." },
      { title: "Dinlenme", text: "Zorunlu sakinleşme saati. Sürekli uyarılmış bir köpek gün sonunda daha huzursuz döner." },
      { title: "Zihinsel çalışma", text: "Koklama oyunları, kısa odaklanma egzersizleri ve temel komut tekrarı." },
      { title: "İkinci seans", text: "Öğleden sonra yeniden açık alan ve serbest oyun." },
      { title: "Teslim", text: "Gün sonunda köpeğinizin gününün nasıl geçtiğini kısaca aktarırız." },
    ],
    processTitle: "Nasıl başlıyor",
    process: [
      { step: "Ön görüşme", text: "Köpeğinizin yaşı, karakteri ve diğer köpeklerle geçmişi konuşulur." },
      { step: "Deneme günü", text: "İlk gün gözlem günüdür. Grup ortamına uyum sağlayıp sağlamadığını dürüstçe söyleriz." },
      { step: "Düzen kurulması", text: "Haftada kaç gün geleceği belirlenir. Düzenli gün, köpek için rastgele günden daha iyidir." },
      { step: "Süreç", text: "Rutin oturduktan sonra gelişimini ve varsa dikkat edilmesi gerekenleri paylaşırız." },
    ],
    conditions: [
      "Aşılar ve parazit uygulamaları güncel olmalıdır",
      "Grup ortamına uyum, deneme günündeki gözlemle belirlenir",
      "Bırakma ve alma saatleri çalışma saatleri içinde planlanır",
    ],
    faq: [
      { q: "Köpeğimi gezdirme hizmetiniz var mı?", a: "Gündüz bakım kapsamında köpeğiniz gün içinde düzenli olarak açık alanda hareket eder ve yürüyüşe çıkarılır. Şehir içinde eve gelip alma şeklinde ayrı bir gezdirme hizmeti vermiyoruz; ihtiyacınız buysa gündüz bakım düzeni çoğu durumda daha iyi sonuç veriyor." },
      { q: "Haftada kaç gün gelmeli?", a: "Enerjisi yüksek köpeklerde haftada 2–3 gün belirgin fark yaratır. Deneme günü sonrasında köpeğinize uygun düzeni beraber belirleriz." },
      { q: "Köpeğim diğer köpeklerle geçinemiyorsa?", a: "Deneme gününde bunu görürüz ve size dürüstçe söyleriz. Grup ortamı köpeğinize göre değilse zorlamayız; bireysel düzen veya farklı bir hizmet öneririz." },
      { q: "Sabah kaçta bırakıp akşam kaçta alabilirim?", a: "Bırakma ve alma çalışma saatleri içinde yapılır. Programınıza göre saatleri önceden konuşuruz." },
      { q: "Yarım gün seçeneği var mı?", a: "Evet. Köpeğinizin ihtiyacına ve sizin programınıza göre yarım gün düzeni kurulabilir." },
    ],
  },
  {
    slug: "kopek-rehabilitasyonu-ankara",
    navLabel: "Rehabilitasyon",
    cardTitle: "Davranış Rehabilitasyonu",
    cardSummary:
      "Saldırganlık, korku, aşırı tepkisellik ve travma kaynaklı davranışlar. Kolay vaatler yerine gerçekçi bir değerlendirme.",
    title: "Ankara'da Köpek Rehabilitasyonu ve Davranış Problemleri",
    metaTitle: "Köpek Rehabilitasyonu Ankara | Davranış Problemleri — Barkyard",
    metaDescription:
      "Ankara'da köpek davranış rehabilitasyonu: saldırganlık, korku, aşırı tepkisellik ve travma kaynaklı davranışlar. Önce değerlendirme, sonra gerçekçi bir plan.",
    heroImage: "/images/hizmetler/rehabilitasyon.jpg",
    heroImageAlt: "Sahibiyle çalışan köpek",
    intro:
      "Buraya genellikle çok şey denedikten sonra geliniyor. Davranış problemleri komut eksikliğinden değil, köpeğin dünyayı nasıl algıladığından kaynaklanır — bu yüzden standart itaat programıyla çözülmez. Size baştan söyleyeceğimiz şey şu: her davranış tamamen ortadan kalkmaz, ancak çoğu davranış yönetilebilir hale gelir. Neyin mümkün olduğunu değerlendirmeden söylemeyiz.",
    primaryAction: "phone",
    whatsappContext: "köpeğimin davranış problemi",
    forWhom: [
      "İnsanlara veya diğer köpeklere karşı tepkisellik ve saldırganlık gösteren köpekler",
      "Yoğun korku, kaçınma veya ses hassasiyeti yaşayanlar",
      "Barınak, sokak veya travmatik geçmişten gelen köpekler",
      "Ayrılık kaygısı, aşırı havlama ve yıkıcı davranış",
      "Kaynak koruma (mama, oyuncak, yer) davranışı gösterenler",
    ],
    notForWhom: [
      "Davranışın altında tıbbi bir neden olabileceği durumlar — önce veteriner değerlendirmesi ister, sonuç olmadan program başlatmayız",
      "Sahibinin sürece aktif katılamayacağı durumlar; bu programlar sahibin katılımı olmadan sonuç vermez",
      "Hızlı ve kesin çözüm bekleyen talepler — bu alanda garanti veren yaklaşımlara güvenmeyin",
    ],
    programTitle: "Yaklaşımımız",
    program: [
      { title: "Detaylı geçmiş", text: "Davranışın ne zaman, hangi durumlarda ve hangi sıklıkla ortaya çıktığı ayrıntılı olarak çıkarılır." },
      { title: "Tıbbi eleme", text: "Ağrı, tiroid, nörolojik veya duyusal bir neden olup olmadığının veteriner tarafından değerlendirilmesi istenir." },
      { title: "Tetikleyici haritası", text: "Köpeği tepkiye götüren mesafe, ses, nesne ve durumlar tek tek belirlenir." },
      { title: "Eşik altı çalışma", text: "Köpek tepki verdiği noktanın altındaki mesafede çalışılır. Tepki verdirerek çalışmak davranışı pekiştirir." },
      { title: "Kademeli maruz bırakma", text: "Tetikleyiciye toleransı, köpeğin hızına göre adım adım artırılır. Aceleci ilerlemek süreci geri atar." },
      { title: "Ev yönetim planı", text: "Evde riski azaltacak somut düzenlemeler yazılı olarak verilir. Süreç boyunca en kritik parça budur." },
    ],
    processTitle: "Süreç",
    process: [
      { step: "Telefon görüşmesi", text: "Bu hizmet için önce telefonla konuşmanızı istiyoruz. Durumu mesajla değerlendirmek doğru olmaz." },
      { step: "Yerinde değerlendirme", text: "Köpeği görmeden plan yapmayız. Değerlendirme sonrası neyin mümkün olduğunu açıkça söyleriz." },
      { step: "Program", text: "Kademeli çalışma başlar. İlerleme kaydedilir, plan gerektiğinde revize edilir." },
      { step: "Uzun dönem takip", text: "Rehabilitasyon biten bir program değil, sürdürülen bir düzendir. Takip seansları buna göre planlanır." },
    ],
    conditions: [
      "Isırma geçmişi varsa bunu baştan ve eksiksiz paylaşmanız gerekir — gizlenen bilgi süreci ve güvenliği doğrudan etkiler",
      "Veteriner değerlendirmesi istenebilir ve bu adım atlanmaz",
      "Aşılar güncel olmalıdır",
      "Sahibin sürece katılımı zorunludur",
    ],
    faq: [
      { q: "Saldırgan köpeğim düzelir mi?", a: "\"Düzelir\" kelimesi bu alanda yanıltıcıdır. Çoğu vakada davranışın şiddeti ve sıklığı belirgin şekilde azalır ve durum yönetilebilir hale gelir. Ancak tetikleyicinin tamamen ortadan kalkacağını kimse dürüstçe söyleyemez. Değerlendirmeden sonra size gerçekçi beklentiyi anlatırız." },
      { q: "Ne kadar sürer?", a: "Davranış rehabilitasyonu itaat eğitiminden uzun sürer ve doğrusal ilerlemez. İyi giden haftaların ardından geri adımlar olabilir; bu normaldir. Süreyi değerlendirmeden sonra konuşuruz." },
      { q: "Neden önce veterinere yönlendiriyorsunuz?", a: "Ani ortaya çıkan saldırganlık ve tepkiselliğin arkasında sıklıkla ağrı veya tıbbi bir neden vardır. Bunu elemeden davranış çalışması yapmak, hem sonuçsuz kalır hem de köpeğe haksızlıktır." },
      { q: "Köpeğim ısırdı, kabul eder misiniz?", a: "Değerlendirmeden sonra karar veririz. Isırma geçmişini eksiksiz paylaşmanız şart. Kabul edemeyeceğimiz bir durum varsa bunu da açıkça söyler, sizi doğru bir yere yönlendiririz." },
      { q: "Neden telefonla görüşmek istiyorsunuz?", a: "Bu vakalarda yazışma yeterli bilgi vermiyor. Kısa bir telefon görüşmesi, durumu doğru anlamamızı ve size boşuna umut ya da gereksiz endişe vermememizi sağlıyor." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const serviceUrls = services.map((s) => `${site.url}/${s.slug}/`);
