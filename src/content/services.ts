import { site } from "@/config/site";

export type FaqItem = { q: string; a: string };

export type Service = {
  slug: string;
  navLabel: string;
  cardTitle: string;
  cardSummary: string;
  /** H1 */
  title: string;
  /** Marka adı İÇERMEZ — layout şablonu " | Barkyard Ankara" ekler */
  metaTitle: string;
  metaDescription: string;
  /** Gerçek fotoğraf gelene kadar lib/media.ts listesinde yok → canlı sitede gösterilmez */
  heroImage: string;
  heroImageAlt: string;
  intro: string;
  /** Birincil aksiyon: rehabilitasyonda telefon, diğerlerinde WhatsApp */
  primaryAction: "whatsapp" | "phone";
  whatsappContext: string;
  forWhom: string[];
  notForWhom: string[];
  programTitle: string;
  programLead: string;
  program: { title: string; text: string }[];
  /** Hizmete özel vurgu bölümü (ör. otelde sağlık ve acil durum) */
  highlightsTitle: string;
  highlights: { title: string; text: string }[];
  /** Örnek günlük akış (zaman çizelgesi). Yalnızca gündüz bakımda kullanılır. */
  schedule?: { time: string; title: string; text: string }[];
  processTitle: string;
  process: { step: string; text: string }[];
  conditions: string[];
  contactTitle: string;
  contactText: string;
  faq: FaqItem[];
};

export const services: Service[] = [
  /* ------------------------------------------------------------ */
  {
    slug: "kopek-egitimi-ankara",
    navLabel: "Köpek Eğitimi",
    cardTitle: "Köpek Eğitimi",
    cardSummary:
      "Temel itaat ve günlük yaşam becerileri. Program köpeğinizin yaşına ve mevcut davranışına göre belirlenir; siz de sürecin içinde olursunuz.",
    title: "Ankara'da köpek eğitimi",
    metaTitle: "Köpek Eğitimi Ankara | Temel İtaat ve Günlük Yaşam Eğitimi",
    metaDescription:
      "Ankara Gölbaşı'nda köpek eğitimi: temel itaat, tasmayla yürüyüş, çağırınca gelme ve ev içi kurallar. Sahibin katıldığı, köpeğe göre belirlenen program.",
    heroImage: "/images/hizmetler/kopek-egitimi.jpg",
    heroImageAlt: "Çimenlikte oturup sahibine dikkatle bakan köpek",
    intro:
      "Eğitimin amacı köpeğe komut ezberletmek değil, sizinle aynı dili konuşmasını sağlamaktır. Her programı köpeğin yaşını, geçmişini ve yaşadığı ortamı değerlendirdikten sonra hazırlarız. Eğitimin kalıcı olması evde de aynı şekilde sürdürülmesine bağlı olduğu için sizi sürecin içinde tutarız.",
    primaryAction: "whatsapp",
    whatsappContext: "köpek eğitimi",
    forWhom: [
      "Temel itaat ve günlük yaşam kurallarını öğrenmesi gereken yavru ve yetişkin köpekler",
      "Tasmayla yürüme, çağırınca gelme ve bekleme gibi becerilerde zorlanan köpekler",
      "Ev içi kurallar, tuvalet alışkanlığı ve misafir karşılama üzerine çalışması gereken köpekler",
      "Aşırı hareketli olan veya odaklanmakta zorlanan köpekler",
    ],
    notForWhom: [
      "Ciddi saldırganlık, ısırma geçmişi veya yoğun korku davranışı olan köpekler. Bu durumda davranış rehabilitasyonu programını öneririz.",
      "Aşıları tamamlanmamış yavrular. Aşı takvimi bitene kadar evde yapabileceklerinizi anlatırız.",
      "Köpeği bırakıp eğitilmiş olarak geri almak isteyen, sürece katılmayacak sahipler",
    ],
    programTitle: "Program içeriği",
    programLead: "Programın her aşamasında ne yaptığımızı ve neden yaptığımızı size anlatırız.",
    program: [
      { title: "Değerlendirme", text: "İlk görüşmede köpeğin mevcut davranışını, yaşadığı ortamı ve beklentilerinizi konuşuruz. Program bu görüşmeye göre hazırlanır." },
      { title: "Temel iletişim", text: "Odaklanma, isme tepki verme, ödül ve yönlendirmenin doğru kullanımı. Diğer bütün çalışmalar bu temel üzerine kurulur." },
      { title: "Temel itaat", text: "Otur, yat, bekle, yanımda yürü ve çağırınca gel. Önce sakin ortamda, sonra dikkat dağıtıcıların olduğu ortamda çalışılır." },
      { title: "Günlük yaşam becerileri", text: "Tasmayla düzgün yürüme, kapıda ve misafir geldiğinde sakin kalma, araca binme, veteriner ve tımar rutinlerine alışma." },
      { title: "Sahiple aktarım seansları", text: "Köpeğin öğrendiklerini sizinle birlikte tekrar ederiz. Bu adım atlanırsa öğrenilenler eve taşınmaz." },
      { title: "Eğitim sonrası takip", text: "Program bitiminde evde nelere dikkat edeceğinizi yazılı olarak veririz ve kontrol seansı planlarız." },
    ],
    highlightsTitle: "Eğitim yaklaşımımız",
    highlights: [
      { title: "Ödül ve yönlendirme", text: "Köpeğin öğrenmesini korkuya dayandıran yöntemler kullanmayız. Kullandığımız her aracı ve nedenini size açıkça anlatırız." },
      { title: "Program köpeğe göre belirlenir", text: "İçerik ve süre; köpeğin yaşına, enerjisine, geçmişine ve sizin günlük düzeninize göre şekillenir." },
      { title: "Sahibin katılımı", text: "Aktarım seansları programın zorunlu bir parçasıdır. Köpeğiniz kurallarını sizden de duymalıdır." },
    ],
    processTitle: "Süreç nasıl ilerliyor?",
    process: [
      { step: "Ön görüşme", text: "WhatsApp'tan veya telefonla köpeğinizi ve ihtiyacınızı anlatırsınız. Size uygun bir program olup olmadığını açıkça söyleriz." },
      { step: "Tesiste tanışma", text: "Köpeğinizle birlikte gelirsiniz. Tesisi görür, eğitmenle tanışırsınız." },
      { step: "Program", text: "Belirlenen içerik ve süreyle çalışmaya başlarız. Süreç boyunca sizi düzenli olarak bilgilendiririz." },
      { step: "Aktarım ve teslim", text: "Öğrenilenleri sizinle birlikte tekrar ederiz. Evde uygulamanız gerekenleri yazılı olarak veririz." },
    ],
    conditions: [
      "Aşı ve iç/dış parazit uygulamaları güncel olmalıdır.",
      "İlk gelişte aşı karnesini veya veteriner kaydını görmemiz gerekir.",
      "Kısırlaştırma zorunlu değildir. Kızgınlık dönemindeki dişiler için program tarihini birlikte planlarız.",
    ],
    contactTitle: "Köpeğinizi anlatın",
    contactText: "Köpeğinizin yaşını, ırkını ve hangi konuda zorlandığınızı yazmanız yeterli. Size uygun programı ve en yakın başlangıç tarihini birlikte belirleyelim.",
    faq: [
      { q: "Eğitim ne kadar sürer?", a: "Süre, köpeğin mevcut durumuna ve hedefe göre değişir. Temel itaat çalışmaları genellikle birkaç hafta sürer; davranış sorunlarında süreç daha uzun olabilir. Ön görüşmede size gerçekçi bir süre söyleriz. Kesin gün sayısı vaat eden yaklaşımlara temkinli yaklaşmanızı öneririz." },
      { q: "Köpeğimi bırakıp eğitilmiş olarak alabilir miyim?", a: "Köpeğiniz tesiste kalarak da çalışabilir, ancak süreci sizin katılımınız olmadan tamamlamayız. Köpek burada öğrendiklerini evde sürdüremezse eğitim kalıcı olmaz. Bu nedenle aktarım seansları programın zorunlu bir parçasıdır." },
      { q: "Hangi yöntemi kullanıyorsunuz?", a: "Ödül ve yönlendirme temelli çalışıyoruz. Köpeğin öğrenmesini korkuya dayandıran yöntemler kullanmıyoruz. Kullandığımız her aracı ve nedenini size açıkça anlatırız." },
      { q: "Yavru köpek kaç aylıkken eğitime başlayabilir?", a: "Aşı takvimi tamamlandıktan sonra erken başlamak en verimlisidir. Aşı süreci devam ederken evde yapabileceğiniz çalışmalar için de yol gösteririz." },
      { q: "Eğitim sırasında köpeğimi görebilir miyim?", a: "Evet. Tesiste kalan köpekler için ziyaret planlayabilir, düzenli fotoğraf ve durum bilgisi alabilirsiniz." },
    ],
  },

  /* ------------------------------------------------------------ */
  {
    slug: "kopek-oteli-ankara",
    navLabel: "Köpek Oteli",
    cardTitle: "Köpek Oteli",
    cardSummary:
      "Tatil, seyahat veya iş nedeniyle şehir dışındayken köpeğiniz bahçeli tesisimizde, düzenli bir günlük rutinle konaklar.",
    title: "Ankara'da köpek oteli ve pansiyon",
    metaTitle: "Köpek Oteli Ankara | Köpek Pansiyonu ve Konaklama",
    metaDescription:
      "Ankara Gölbaşı'nda bahçeli köpek oteli ve köpek pansiyonu. Günlük rutin, açık alan, beslenme düzeni ve düzenli bilgilendirme. Yer ve tarih için WhatsApp'tan yazın.",
    heroImage: "/images/hizmetler/kopek-oteli.jpg",
    heroImageAlt: "Yumuşak yatağında dinlenen köpek",
    intro:
      "Köpeğinizi birine emanet etmek kolay bir karar değil. Bu kararı kolaylaştırmak için her şeyi göstermeyi tercih ediyoruz: Rezervasyondan önce tesisi gezmenizi, köpeğinizin kalacağı yeri görmenizi ve günlük rutini öğrenmenizi öneriyoruz.",
    primaryAction: "whatsapp",
    whatsappContext: "köpek oteli ve konaklama",
    forWhom: [
      "Tatil veya iş seyahati boyunca köpeğine güvenli bir yer arayanlar",
      "Taşınma, tadilat gibi geçici dönemlerde konaklama ihtiyacı olanlar",
      "Evde uzun süre yalnız kalmakta zorlanan köpekler",
      "Konaklama süresince hafif eğitim desteği de isteyenler",
    ],
    notForWhom: [
      "Diğer köpeklere karşı ciddi saldırganlık gösteren köpekler. Bu durumda önce ayrı bir değerlendirme yaparız.",
      "Aşıları eksik olan veya bulaşıcı hastalık şüphesi bulunan köpekler",
      "Sürekli tıbbi takip ve veteriner gözetimi gerektiren durumlar",
    ],
    programTitle: "Günlük rutin",
    programLead: "Konaklama boyunca gün belirli bir düzende ilerler. Saatler köpeğe ve havaya göre esneyebilir.",
    program: [
      { title: "Sabah", text: "Uyanış, tuvalet çıkışı, kahvaltı ve genel sağlık gözlemi." },
      { title: "Öğleden önce", text: "Bahçede serbest zaman, koşu ve oyun. Köpekler birbirleriyle uyumlarına göre gruplanır ya da tek başına çıkarılır." },
      { title: "Öğle", text: "Dinlenme saati: sakin ortam, gölge ve su." },
      { title: "Öğleden sonra", text: "İkinci açık alan seansı, oyun ve gerekiyorsa hafif çalışma." },
      { title: "Akşam", text: "Akşam yemeği, son tuvalet çıkışı ve gece düzenine geçiş." },
      { title: "Bilgilendirme", text: "Konaklama boyunca fotoğraf ve durum bilgisi paylaşırız. Sormanızı beklemeyiz." },
    ],
    highlightsTitle: "Konaklama, beslenme ve sağlık",
    highlights: [
      { title: "Konaklama alanları", text: "Her köpeğin kendine ayrılmış bir alanı vardır. Ortak alan kullanımı köpeklerin birbirine uyumuna göre belirlenir." },
      { title: "Beslenme", text: "Köpeğiniz alıştığı mamayı, alıştığı saatlerde ve miktarda yer. Ani mama değişikliği sindirim sorunlarına yol açabilir." },
      { title: "Dinlenme ve açık alan", text: "Gün içinde en az iki açık alan seansı ve bunların arasında zorunlu bir dinlenme zamanı vardır." },
      { title: "Sağlık ve acil durum", text: "Konaklamadan önce veterinerinizin ve acil durumda ulaşılacak kişinin bilgisini alırız. Bir sorun olduğunda önce sizi ararız; size ulaşılamayan acil durumlarda köpeğiniz gecikmeden veterinere götürülür ve size ayrıntılı bilgi verilir." },
    ],
    processTitle: "Rezervasyon nasıl yapılır?",
    process: [
      { step: "Tarih ve uygunluk", text: "WhatsApp'tan tarihleri yazarsınız, uygunluk durumunu en kısa sürede bildiririz." },
      { step: "Tesis ziyareti", text: "Konaklamadan önce tesisi gezmenizi öneriyoruz. Böylece köpeğiniz de ortamı önceden tanımış olur." },
      { step: "Bilgi formu", text: "Beslenme düzeni, alışkanlıklar, ilaçlar, veteriner bilgisi ve acil durumda ulaşılacak kişi kayda alınır." },
      { step: "Konaklama ve teslim", text: "Konaklama süresince sizi düzenli olarak bilgilendiririz. Teslimde konaklamanın nasıl geçtiğini birlikte konuşuruz." },
    ],
    conditions: [
      "Karma ve kuduz aşıları güncel olmalı ve aşı karnesiyle belgelenmelidir.",
      "İç ve dış parazit uygulaması konaklamadan önce yapılmış olmalıdır.",
      "Köpeğinizin alıştığı mamayı getirmenizi öneriyoruz.",
      "Düzenli kullandığı bir ilaç varsa dozunu ve saatini yazılı olarak bildirmeniz gerekir.",
    ],
    contactTitle: "Tarihleri yazın",
    contactText: "Konaklama tarihlerini, köpeğinizin yaşını ve ırkını yazmanız yeterli. Uygunluk durumunu ve tesis ziyareti için uygun günleri bildirelim.",
    faq: [
      { q: "Köpeğim nerede uyuyor?", a: "Her köpeğin kendine ayrılmış bir alanı vardır. Ortak alan kullanımı köpeklerin birbirine uyumuna göre belirlenir. Kalacağı yeri konaklamadan önce yerinde görebilirsiniz." },
      { q: "Köpeğim günde ne kadar dışarı çıkıyor?", a: "Günlük rutinde en az iki açık alan seansı vardır. Süre havaya, köpeğin enerjisine ve grubun durumuna göre değişir." },
      { q: "Köpeğim hastalanırsa ne oluyor?", a: "Konaklamadan önce veterinerinizin ve acil durumda ulaşılacak kişinin bilgisini alırız. Bir sorun olduğunda önce size haber veririz. Size ulaşılamayan acil durumlarda köpeğinizin sağlığı önceliklidir ve gecikmeden veterinere götürülür." },
      { q: "Kendi mamasını getirebilir miyim?", a: "Evet, kendi mamasını getirmenizi özellikle öneriyoruz. Ani mama değişikliği sindirim sorunlarına yol açabilir." },
      { q: "Konaklama sırasında bilgi alabilir miyim?", a: "Evet. Düzenli olarak fotoğraf ve durum bilgisi paylaşırız. İstediğiniz zaman yazıp sorabilirsiniz." },
      { q: "Kaç gün önceden rezervasyon yapmalıyım?", a: "Bayram ve yaz tatili gibi yoğun dönemlerde yerler erken doluyor. Bu dönemler için mümkün olduğunca önceden yazmanızı öneririz." },
    ],
  },

  /* ------------------------------------------------------------ */
  {
    slug: "kopek-gunduz-bakim-ankara",
    navLabel: "Gündüz Bakım",
    cardTitle: "Gündüz Bakım",
    cardSummary:
      "Siz işteyken köpeğiniz evde yalnız kalmak yerine gününü hareket, oyun ve dinlenme düzeniyle geçirir; akşam size döner.",
    title: "Ankara'da köpek gündüz bakımı",
    metaTitle: "Köpek Gündüz Bakım Ankara | Köpek Kreşi",
    metaDescription:
      "Ankara Gölbaşı'nda köpek gündüz bakımı ve köpek kreşi. Oyun, dinlenme, zihinsel aktivite ve gün sonu bilgilendirme. Deneme günü için WhatsApp'tan yazın.",
    heroImage: "/images/hizmetler/gunduz-bakim.jpg",
    heroImageAlt: "Çimenlik alanda birlikte oynayan köpekler",
    intro:
      "Gün boyu evde yalnız kalan bir köpeğin enerjisi kaybolmaz; çoğu zaman akşam havlama, kemirme veya huzursuzluk olarak karşınıza çıkar. Gündüz bakımda köpeğiniz sabah gelir, günü hareket, oyun ve dinlenme düzeni içinde geçirir, akşam daha sakin bir şekilde eve döner.",
    primaryAction: "whatsapp",
    whatsappContext: "gündüz bakım",
    forWhom: [
      "Gün boyu evde yalnız kalan ve enerjisini atamayan köpekler",
      "Yalnız kaldığında havlama, kemirme veya huzursuzluk gösteren köpekler",
      "Sosyalleşmeye ihtiyacı olan yavru ve genç köpekler",
      "Gün içinde köpeğine yeterli hareket imkânı sağlayamayan sahipler",
    ],
    notForWhom: [
      "Diğer köpeklerle grup ortamına uyum sağlayamayan köpekler. Bu durumda önce bireysel değerlendirme yaparız.",
      "Aşıları eksik olan köpekler",
      "Yoğun korku veya saldırganlık davranışı gösteren köpekler. Bu durumda önce rehabilitasyonu konuşuruz.",
    ],
    programTitle: "Gün nasıl geçiyor?",
    programLead: "Gündüz bakım; hareket, dinlenme ve zihinsel çalışmanın dengeli olduğu bir gün düzenidir.",
    program: [
      { title: "Karşılama", text: "Gelişte kısa bir sağlık ve ruh hali kontrolü yapılır, köpek gruba yavaş yavaş katılır." },
      { title: "Oyun", text: "Açık alanda koşu ve oyun. Gruplar köpeklerin boyuna, yaşına ve oyun tarzına göre ayrılır." },
      { title: "Dinlenme", text: "Zorunlu sakinleşme zamanı. Gün boyu sürekli uyarılan bir köpek eve daha huzursuz döner." },
      { title: "Zihinsel aktiviteler", text: "Koklama oyunları, kısa odaklanma egzersizleri ve temel komut tekrarları." },
      { title: "Gün sonu teslim", text: "Köpeğinizi teslim ederken gününün nasıl geçtiğini kısaca anlatırız." },
      { title: "Uyum değerlendirmesi", text: "İlk gün gözlem günüdür. Köpeğinizin grup ortamına uyum sağlayıp sağlamadığını açıkça söyleriz." },
    ],
    highlightsTitle: "Gündüz bakımın kuralları",
    highlights: [
      { title: "Önce deneme günü", text: "Düzenli gelmeye başlamadan önce köpeğinizi bir gün gözlemleriz. Grup ortamı ona uygun değilse zorlamayız." },
      { title: "Düzenli günler", text: "Haftanın belirli günlerinde gelmek, köpek için rastgele günlerden daha iyi sonuç verir." },
      { title: "Yarım gün seçeneği", text: "Köpeğinizin ihtiyacına ve sizin programınıza göre yarım gün düzeni de kurulabilir." },
    ],
    schedule: [
      { time: "09:30", title: "Karşılama", text: "Sağlık ve ruh hali kontrolü, gruba yavaş geçiş" },
      { time: "10:00", title: "Oyun", text: "Açık alanda koşu ve grup oyunu" },
      { time: "12:00", title: "Dinlenme", text: "Sakin ortamda zorunlu dinlenme" },
      { time: "14:00", title: "Zihinsel aktivite", text: "Koklama oyunları ve kısa odaklanma çalışmaları" },
      { time: "15:30", title: "İkinci oyun", text: "Açık alanda serbest oyun" },
      { time: "17:00", title: "Sakinleşme ve teslim", text: "Gün sonu kontrolü ve sahibine kısa bilgilendirme" },
    ],
    processTitle: "Nasıl başlıyoruz?",
    process: [
      { step: "Ön görüşme", text: "Köpeğinizin yaşını, karakterini ve diğer köpeklerle geçmişini konuşuruz." },
      { step: "Deneme günü", text: "İlk gün gözlem günüdür. Grup ortamına uyum sağlayıp sağlamadığını size açıkça söyleriz." },
      { step: "Düzenin kurulması", text: "Haftada kaç gün geleceğini birlikte belirleriz." },
      { step: "Takip", text: "Rutin oturduktan sonra köpeğinizin gelişimini ve dikkat edilmesi gerekenleri paylaşırız." },
    ],
    conditions: [
      "Aşılar ve parazit uygulamaları güncel olmalıdır.",
      "Grup ortamına uyum, deneme günündeki gözleme göre belirlenir.",
      "Bırakma ve alma saatleri çalışma saatlerimiz içinde planlanır.",
    ],
    contactTitle: "Deneme günü planlayalım",
    contactText: "Köpeğinizin yaşını, ırkını ve diğer köpeklerle ilişkisini kısaca yazın. Deneme günü için uygun tarihleri bildirelim.",
    faq: [
      { q: "Köpek gezdirme hizmetiniz var mı?", a: "Gündüz bakımda köpeğiniz gün içinde düzenli olarak açık alanda hareket eder. Eve gelip köpek alma şeklinde ayrı bir gezdirme hizmetimiz yok; ihtiyacınız buysa gündüz bakım çoğu durumda daha uygun bir seçenek olur." },
      { q: "Köpeğim haftada kaç gün gelmeli?", a: "Bu, köpeğinizin enerjisine ve sizin programınıza bağlıdır. Deneme gününden sonra köpeğinize uygun düzeni birlikte belirleriz." },
      { q: "Köpeğim diğer köpeklerle anlaşamazsa ne olur?", a: "Bunu deneme gününde görür ve size açıkça söyleriz. Grup ortamı köpeğinize uygun değilse zorlamayız; bireysel bir düzen veya farklı bir hizmet öneririz." },
      { q: "Köpeğimi kaçta bırakıp kaçta alabilirim?", a: "Bırakma ve alma işlemleri çalışma saatlerimiz içinde yapılır. Saatleri programınıza göre önceden konuşuruz." },
      { q: "Yarım gün seçeneği var mı?", a: "Evet. Köpeğinizin ihtiyacına ve programınıza göre yarım gün düzeni kurulabilir." },
    ],
  },

  /* ------------------------------------------------------------ */
  {
    slug: "kopek-rehabilitasyonu-ankara",
    navLabel: "Rehabilitasyon",
    cardTitle: "Davranış Rehabilitasyonu",
    cardSummary:
      "Saldırganlık, korku, aşırı tepkisellik ve travmaya bağlı davranışlar. Önce değerlendirme, sonra gerçekçi bir plan. İlk adım kısa bir telefon görüşmesidir.",
    title: "Ankara'da köpek davranış rehabilitasyonu",
    metaTitle: "Köpek Rehabilitasyonu Ankara | Davranış Sorunları",
    metaDescription:
      "Ankara Gölbaşı'nda köpek davranış rehabilitasyonu: saldırganlık, korku, tepkisellik ve ayrılık kaygısı. Önce değerlendirme, gerektiğinde veteriner yönlendirmesi, sonra kademeli bir plan.",
    heroImage: "/images/hizmetler/rehabilitasyon.jpg",
    heroImageAlt: "Sahibiyle çak yapan köpek",
    intro:
      "Bize genellikle başka yolları denedikten sonra ulaşılıyor. Davranış sorunları çoğu zaman komut eksikliğinden değil, köpeğin çevresini nasıl algıladığından kaynaklanır; bu yüzden standart itaat eğitimiyle çözülmez. Her davranışın tamamen ortadan kalkacağını söyleyemeyiz. Neyin mümkün olduğunu ancak köpeğinizi değerlendirdikten sonra konuşabiliriz.",
    primaryAction: "phone",
    whatsappContext: "köpeğimin davranış sorunu",
    forWhom: [
      "İnsanlara veya diğer köpeklere karşı tepkisellik ve saldırganlık gösteren köpekler",
      "Yoğun korku, kaçınma veya seslere aşırı hassasiyet gösteren köpekler",
      "Barınak, sokak veya travmatik bir geçmişten gelen köpekler",
      "Ayrılık kaygısı, aşırı havlama ve eşyalara zarar verme",
      "Mama, oyuncak veya alan koruma davranışı gösteren köpekler",
    ],
    notForWhom: [
      "Davranışın altında tıbbi bir neden olabileceği durumlar. Önce veteriner değerlendirmesi isteriz; sonuç alınmadan programa başlamayız.",
      "Sahibin sürece düzenli olarak katılamayacağı durumlar",
      "Hızlı ve kesin sonuç beklentisi. Bu alanda garanti veren yaklaşımlara temkinli yaklaşmanızı öneririz.",
    ],
    programTitle: "Yaklaşımımız",
    programLead: "Çalışma, davranışın nedenini anlamakla başlar ve köpeğin hızına göre ilerler.",
    program: [
      { title: "Davranış değerlendirmesi", text: "Davranışın ne zaman, hangi durumlarda ve ne sıklıkla ortaya çıktığını ayrıntılı olarak konuşuruz." },
      { title: "Veterinere yönlendirme", text: "Ağrı veya başka bir tıbbi neden olabileceğini düşündüğümüzde, çalışmaya başlamadan önce veteriner değerlendirmesi isteriz." },
      { title: "Tetikleyici analizi", text: "Köpeği tepki vermeye iten mesafe, ses, nesne ve durumları tek tek belirleriz." },
      { title: "Kademeli çalışma", text: "Köpeğin tepki vermediği mesafeden başlarız ve toleransını onun hızına göre adım adım artırırız. Aceleci ilerlemek süreci geri götürür." },
      { title: "Sahibin katılımı", text: "Evde riski azaltacak düzenlemeleri yazılı olarak veririz. Çalışmaların evde de aynı şekilde sürdürülmesi sürecin en önemli parçasıdır." },
      { title: "Uzun dönem takip", text: "Rehabilitasyon bir anda biten bir program değil, sürdürülen bir düzendir. Takip görüşmelerini buna göre planlarız." },
    ],
    highlightsTitle: "Gerçekçi beklentiler",
    highlights: [
      { title: "Garanti vermeyiz", text: "Sonuç; köpeğin geçmişine, davranışın şiddetine ve evde uygulanan düzene bağlıdır. Kesin sonuç veya süre vaat etmeyiz." },
      { title: "İlerleme düz bir çizgi değildir", text: "İyi giden haftaların ardından geri adımlar görülebilir. Bu sürecin olağan bir parçasıdır; planı buna göre güncelleriz." },
      { title: "Hedef yönetilebilirlik", text: "Amacımız davranışın sıklığını ve şiddetini azaltmak ve günlük hayatı sizin ve köpeğiniz için daha güvenli hale getirmektir." },
    ],
    processTitle: "Süreç nasıl ilerliyor?",
    process: [
      { step: "Telefon görüşmesi", text: "Bu hizmet için önce telefonla konuşmayı tercih ediyoruz. Bu tür durumları yazışarak değerlendirmek doğru olmaz." },
      { step: "Yerinde değerlendirme", text: "Köpeği görmeden plan yapmayız. Değerlendirmeden sonra neyin mümkün olduğunu açıkça söyleriz." },
      { step: "Program", text: "Kademeli çalışmaya başlarız. İlerlemeyi kaydeder, gerektiğinde planı güncelleriz." },
      { step: "Takip", text: "Program sonrasında da düzenli takip görüşmeleri yaparız." },
    ],
    conditions: [
      "Isırma geçmişi varsa bunu baştan ve eksiksiz paylaşmanız gerekir. Eksik bilgi hem süreci hem güvenliği etkiler.",
      "Veteriner değerlendirmesi isteyebiliriz; bu adımı atlamayız.",
      "Aşılar güncel olmalıdır.",
      "Sahibin sürece katılımı zorunludur.",
    ],
    contactTitle: "Önce telefonla konuşalım",
    contactText: "Kısa bir telefon görüşmesi, durumu doğru anlamamızı ve size gerçekçi bilgi vermemizi sağlar. Çalışma saatlerimizde bizi arayabilirsiniz.",
    faq: [
      { q: "Saldırgan köpeğim düzelir mi?", a: "Bu alanda \"düzelme\" kelimesi yanıltıcı olabilir. Pek çok durumda davranışın şiddeti ve sıklığı azaltılabilir ve durum yönetilebilir hale gelebilir; ancak sonuç her köpekte farklıdır. Değerlendirmeden sonra sizin köpeğiniz için gerçekçi beklentiyi anlatırız." },
      { q: "Rehabilitasyon ne kadar sürer?", a: "Davranış rehabilitasyonu genellikle itaat eğitiminden uzun sürer ve düz bir çizgide ilerlemez. Süreyi köpeğinizi değerlendirdikten sonra konuşuruz." },
      { q: "Neden önce veterinere yönlendiriyorsunuz?", a: "Aniden ortaya çıkan saldırganlık ve tepkiselliğin arkasında ağrı veya başka bir tıbbi neden olabilir. Bu ihtimali ele almadan yapılan davranış çalışması hem sonuçsuz kalabilir hem de köpeğe haksızlık olur." },
      { q: "Köpeğim ısırdı. Kabul eder misiniz?", a: "Değerlendirmeden sonra karar veririz. Isırma geçmişini eksiksiz paylaşmanız gerekir. Kabul edemeyeceğimiz bir durum olursa bunu açıkça söyler, mümkünse sizi doğru bir yere yönlendiririz." },
      { q: "Neden telefonla görüşmek istiyorsunuz?", a: "Bu tür durumlarda yazışma yeterli bilgi vermiyor. Kısa bir telefon görüşmesi, durumu doğru anlamamızı ve size boşuna umut ya da gereksiz endişe vermememizi sağlıyor." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const serviceUrls = services.map((s) => `${site.url}/${s.slug}/`);
