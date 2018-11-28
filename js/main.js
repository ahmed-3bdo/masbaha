var navButton = document.getElementById('nav-button'),
    navigation = document.getElementById('navigation'),
    azkarList = document.querySelectorAll('.navigation .container ul li'),
    afterSalahZekr = document.getElementById('after-salah'),
    saba7Zekr = document.getElementById('azkar-sba7'),
    masa2Zekr = document.getElementById('azkar-masa2'),
    zekrPreview = document.getElementById('zekr-preview'),
    counter = document.getElementById('counter'),
    repeat = document.getElementById('repeat'),
    count = document.getElementById('click'),
    loading = document.getElementById('loading'),
    i = 0,
    s = 0,
    azkar1 = [
        "\'سبحان الله\' (33مرة.)",
        "\'الحمد الله\' (33مرة.)",
        "\'الله أكبر\' (33مرة.)",
        "\'لا إاله إلا الله\' (مرة واحدة.)",
    ],
    azkar2 = [
        "[ اللّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ  تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ  أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ  بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ  حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيم ] مرة واحدة. ",
        "[ قُلْ هُوَ اللَّهُ أَحَدٌ اللَّهُ الصَّمَدُ لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُن لَّهُ كُفُوًا  أَحَدٌ ] ثلاث مرات. ",
        "[ قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ مِنْ شَرِّ مَا خَلَقَ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ ] ثلاث مرات. ",
        "[ قُل أَعُوذُ بِرَبِ النَّاسِ مَلِكِ النَّاسِ إلهِ النَّاسِ مِنْ شَرِ الوَسْواسِ الخَنَّاسِ الذي يُوَسْوِسُ فِي صُدُورِ النَّاسِ مِنَ الجِنَّةِ وَ النَّاس ] ثلاث مرات. ",
        "أَصْـبَحْنا وَ أَصْـبَحَ المُـلْكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ ، لهُ المُـلكُ و لهُ الحَمْـد ، و هُوَ على كلّ شَيءٍ قدير ، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذا اليوم وَ خَـيرَ ما بَعْـدَه ، وَ أَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذا اليوم وَ شَرِّ ما بَعْـدَه ، رَبِّ أَعـوذُ بِكَ مِنَ الْكَسَـلِ وَ سـوءِ الْكِـبَر ، رَبِّ أَعـوذُ بِكَ مِنْ عَـذابٍ في النّـارِ وَ عَـذابٍ في القَـبْر (مرة واحدة). ",
        "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ (مرة واحدة). ",
        "اللّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ ، خَلَقْتَنـي وَ أَنا عَبْـدُك ، وَ أَنا عَلـى عَهْـدِكَ وَ وَعْـدِكَ ما اسْتَـطَعْـت ، أَعـوذُ بِكَ مِنْ شَـرِّ ما صَنَـعْت ، أَبـوءُ لَـكَ بِنِعْـمَتِـكَ عَلَـيَّ وَ أَبـوءُ بِذَنْـبي فَاغْفـِرْ لي فَإِنَّـهُ لا يَغْـفِرُ الذُّنـوبَ إِلاّ أَنْتَ. “ من قالها موقناً بها حين يمسي ومات من ليلته دخل الجنة وكذلك حين يصبح ” . (مرة واحدة). ",
        "اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَ أُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَ مَلَائِكَتَكَ ، وَ جَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَ أَنَّ مُحَمّـداً عَبْـدُكَ وَ رَسـولُـك. (أربع مرات). ",
        "اللّهُـمَّ ما أَصْبَـَحَ بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر. (مرة واحدة). ",
        "اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ. (ثلاث مرات). ",
        "حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَ هُوَ رَبُّ العَرْشِ العَظـيم. (سبع مرات). ",
        "اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَ العـافِـيةَ في الدُّنْـيا وَ الآخِـرَة ، ا للّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَ العـافِـيةَ في ديني وَ دُنْـيايَ وَ أهْـلي وَ مالـي ، اللّهُـمَّ اسْتُـرْ عـوْراتي وَ آمِـنْ رَوْعاتـي ، اللّهُـمَّ احْفَظْـني مِن بَـينِ يَدَيَّ وَ مِن خَلْفـي وَ عَن يَمـيني وَ عَن شِمـالي ، وَ مِن فَوْقـي ، وَ أَعـوذُ بِعَظَمَـتِكَ أَن أُغْـتالَ مِن تَحْتـي. (مرة واحدة). ",
        "اللّهُـمَّ عالِـمَ الغَـيْبِ وَ الشّـهادَةِ فاطِـرَ السّماواتِ وَ الأرْضِ رَبَّ كـلِّ شَـيءٍ وَ مَليـكَه ، أَشْهَـدُ أَنْ لا إِلـهَ إِلاّ أَنْت ، أَعـوذُ بِكَ مِن شَـرِّ نَفْسـي وَ مِن شَـرِّ الشَّيْـطانِ وَ شِرْكِهِ ، وَ أَنْ أَقْتَـرِفَ عَلـى نَفْسـي سوءاً أَوْ أَجُـرَّهُ إِلـى مُسْـلِم. (مرة واحدة). ",
        "بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَ هـوَ السّمـيعُ العَلـيم. (ثلاث مرات). ",
        "رَضيـتُ بِاللهِ رَبَّـاً وَ بِالإسْلامِ ديـناً وَ بِمُحَـمَّدٍ صلّى الله عليه و سلّم نَبِيّـاً. (ثلاث مرات). ",
        "يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ. (مرة واحدة). ",
        "أَصْبَـحْـنا وَ أَصْبَـحْ المُـلكُ للهِ رَبِّ العـالَمـين ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ خَـيْرَ هـذا الـيَوْم ، فَـتْحَهُ ، وَ نَصْـرَهُ ، وَ نـورَهُ وَ بَـرَكَتَـهُ ، وَ هُـداهُ ، وَ أَعـوذُ بِـكَ مِـنْ شَـرِّ ما فـيهِ وَ شَـرِّ ما بَعْـدَه. (مرة واحدة). ",
        "أَصْبَـحْـنا عَلَى فِطْرَةِ الإسْلاَمِ ، وَ عَلَى كَلِمَةِ الإِخْلاَصِ ، وَ عَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ ، وَ عَلَى مِلَّةِ أَبِينَا إبْرَاهِيمَ حَنِيفاً مُسْلِماً وَ مَا كَانَ مِنَ المُشْرِكِينَ. (مرة واحدة). ",
        "سُبْحـانَ اللهِ وَ بِحَمْـدِهِ . (100 مرة). ",
        "لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ ، لَهُ الْمُلْكُ وَ لَهُ الْحَمْدُ وَ هُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ (10 مرات). ",
        "سُبْحـانَ اللهِ وَ بِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَ رِضـا نَفْسِـه ، وَ زِنَـةَ عَـرْشِـه ، وَ مِـدادَ كَلِمـاتِـه. (ثلاث مرات). ",
        "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا ، وَ رِزْقًا طَيِّبًا ، وَ عَمَلًا مُتَقَبَّلًا . (مرة واحدة). ",
        " أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ ، الحَيُّ القَيُّومُ ، وَ أتُوبُ إلَيهِ . (100 مرة). ",
        "اللَّهُمَّ صَلِّ وَسَلِّمْ وَ بَارِكْ على نَبِيِّنَا مُحمَّد . (10 مرة). "
    ],
    azkar3 = [
        "[ اللّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ  تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ  أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ  بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ  حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيم ] مرة واحدة. ",
        "[ قُلْ هُوَ اللَّهُ أَحَدٌ اللَّهُ الصَّمَدُ لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُن لَّهُ كُفُوًا  أَحَدٌ ] ثلاث مرات. ",
        "[ قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ مِنْ شَرِّ مَا خَلَقَ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ ] ثلاث مرات. ",
        "[ قُل أَعُوذُ بِرَبِ النَّاسِ مَلِكِ النَّاسِ إلهِ النَّاسِ مِنْ شَرِ الوَسْواسِ الخَنَّاسِ الذي يُوَسْوِسُ فِي صُدُورِ النَّاسِ مِنَ الجِنَّةِ وَ النَّاس ] ثلاث مرات. ",
        "أمسينا وأمسى المُـلْكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير ، اللهم أنا نسْـأَلُـكَ خَـيرَ ما في هـذة الليلة وَخَـيرَ ما بَعْـدَها ، وَنعـوذُ بِكَ مِنْ شَـرِّ هـذة الليلة وَشَرِّ ما بَعْـدَها، وَ أَعـوذُبِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر ، وَ أَعـوذُبِكَ مِنْ عَـذابٍ في النّـارِ وَعَـذابٍ في القَـبْر. (مرة واحدة). ",
        "اللَّهُمَّ بِكَ أَمْسَيْنَا، وبِكَ أَصْبَحْنَا، َ وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ (مرة واحدة). ",
        "اللّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ ، خَلَقْتَنـي وَ أَنا عَبْـدُك ، وَ أَنا عَلـى عَهْـدِكَ وَ وَعْـدِكَ ما اسْتَـطَعْـت ، أَعـوذُ بِكَ مِنْ شَـرِّ ما صَنَـعْت ، أَبـوءُ لَـكَ بِنِعْـمَتِـكَ عَلَـيَّ وَ أَبـوءُ بِذَنْـبي فَاغْفـِرْ لي فَإِنَّـهُ لا يَغْـفِرُ الذُّنـوبَ إِلاّ أَنْتَ. “ من قالها موقناً بها حين يمسي ومات من ليلته دخل الجنة وكذلك حين يصبح ” . (مرة واحدة). ",
        "اللّهُـمَّ إِنِّـي أَمسيتُ أُشْـهِدُك ، وَ أُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَ مَلَائِكَتَكَ ، وَ جَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَ أَنَّ مُحَمّـداً عَبْـدُكَ وَ رَسـولُـك. (أربع مرات). ",
        "اللّهُـمَّ ما أَمسى  بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر. (مرة واحدة). ",
        "اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ. (ثلاث مرات). ",
        "حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَ هُوَ رَبُّ العَرْشِ العَظـيم. (سبع مرات). ",
        "اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَ العـافِـيةَ في الدُّنْـيا وَ الآخِـرَة ، ا للّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَ العـافِـيةَ في ديني وَ دُنْـيايَ وَ أهْـلي وَ مالـي ، اللّهُـمَّ اسْتُـرْ عـوْراتي وَ آمِـنْ رَوْعاتـي ، اللّهُـمَّ احْفَظْـني مِن بَـينِ يَدَيَّ وَ مِن خَلْفـي وَ عَن يَمـيني وَ عَن شِمـالي ، وَ مِن فَوْقـي ، وَ أَعـوذُ بِعَظَمَـتِكَ أَن أُغْـتالَ مِن تَحْتـي. (مرة واحدة). ",
        "اللّهُـمَّ عالِـمَ الغَـيْبِ وَ الشّـهادَةِ فاطِـرَ السّماواتِ وَ الأرْضِ رَبَّ كـلِّ شَـيءٍ وَ مَليـكَه ، أَشْهَـدُ أَنْ لا إِلـهَ إِلاّ أَنْت ، أَعـوذُ بِكَ مِن شَـرِّ نَفْسـي وَ مِن شَـرِّ الشَّيْـطانِ وَ شِرْكِهِ ، وَ أَنْ أَقْتَـرِفَ عَلـى نَفْسـي سوءاً أَوْ أَجُـرَّهُ إِلـى مُسْـلِم. (مرة واحدة). ",
        "بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَ هـوَ السّمـيعُ العَلـيم. (ثلاث مرات). ",
        "رَضيـتُ بِاللهِ رَبَّـاً وَ بِالإسْلامِ ديـناً وَ بِمُحَـمَّدٍ صلّى الله عليه و سلّم نَبِيّـاً. (ثلاث مرات). ",
        "يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ. (مرة واحدة). ",
        "أَمْسَيْـنا وَأَمْسـى المُـلكُ للهِ رَبِّ العـالَمـين ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ خَـيْرَ ما في هـذهِ اللَّـيْلَةِ وَخَـيرَ ما بَعْـدَهـا ، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذهِ اللَّـيْلةِ وَشَرِّ ما بَعْـدَهـا . (مرة واحدة). ",
        "أَمْسَيْـنا عَلَى فِطْرَةِ الإسْلاَمِ ، وَ عَلَى كَلِمَةِ الإِخْلاَصِ ، وَ عَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ ، وَ عَلَى مِلَّةِ أَبِينَا إبْرَاهِيمَ حَنِيفاً مُسْلِماً وَ مَا كَانَ مِنَ المُشْرِكِينَ. (مرة واحدة). ",
        "سُبْحـانَ اللهِ وَ بِحَمْـدِهِ . (100 مرة). ",
        "لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ ، لَهُ الْمُلْكُ وَ لَهُ الْحَمْدُ وَ هُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ (10 مرات). ",
        "أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق. (ثلاث مرات). ",
        "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا ، وَ رِزْقًا طَيِّبًا ، وَ عَمَلًا مُتَقَبَّلًا . (مرة واحدة). ",
        " أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ ، الحَيُّ القَيُّومُ ، وَ أتُوبُ إلَيهِ . (100 مرة). ",
        "اللَّهُمَّ صَلِّ وَسَلِّمْ وَ بَارِكْ على نَبِيِّنَا مُحمَّد . (10 مرة). "
    ];

/********************{All Functions}****************************/

//navigation Toggle Function
function toggleClassFunc() {
    navigation.classList.toggle('nav-height');
}

// azkar 1 function
function azkarOne(data) {
    // Activate Counter For Azkar 1 
    count.onclick = function defaultfunc() {
        azkarOne(azkar1);
        repeat.onclick = function () {
            reset();
            azkarOne(azkar1);
        }
    }
    // Azkar 1 Statements
    counter.textContent = i += 1;
    if (i <= 33) {
        zekrPreview.textContent = data[0];
    }
    if (i >= 33) {
        zekrPreview.textContent = data[1];
    }
    if (i >= 66) {
        zekrPreview.textContent = data[2];
    }
    if (i == 99) {
        zekrPreview.textContent = data[3];
    }
    if (i >= 100) {
        zekrPreview.textContent = "";
    }
}

// azkar 2 function
function AzkarTwo(data) {
    // Activate Counter For Azkar 2 
    count.onclick = function () {
        AzkarTwo(azkar2);
        repeat.onclick = function () {
            reset();
            AzkarTwo(azkar2);
        }
    }
    // Azkar 2 Statements
    counter.textContent = i += 1;
    if (i == 0) {
        zekrPreview.textContent = data[0];
    }
    if (i >= 1 && i <= 3) {
        zekrPreview.textContent = data[1];
    }
    if (i >= 4 && i <= 6) {
        zekrPreview.textContent = data[2];
    }
    if (i >= 7 && i <= 9) {
        zekrPreview.textContent = data[3];
    }
    if (i == 10) {
        zekrPreview.textContent = data[4];
    }
    if (i == 11) {
        zekrPreview.textContent = data[5];
    }
    if (i == 12) {
        zekrPreview.textContent = data[6];
    }
    if (i >= 13 && i <= 16) {
        zekrPreview.textContent = data[7];
    }
    if (i == 17) {
        zekrPreview.textContent = data[8];
    }
    if (i >= 18 && i <= 20) {
        zekrPreview.textContent = data[9];
    }
    if (i >= 21 && i <= 27) {
        zekrPreview.textContent = data[10];
    }
    if (i == 28) {
        zekrPreview.textContent = data[11];
    }
    if (i == 29) {
        zekrPreview.textContent = data[12];
    }
    if (i >= 30 && i <= 32) {
        zekrPreview.textContent = data[13];
    }
    if (i >= 33 && i <= 35) {
        zekrPreview.textContent = data[14];
    }
    if (i == 36) {
        zekrPreview.textContent = data[15];
    }
    if (i == 37) {
        zekrPreview.textContent = data[16];
    }
    if (i == 37) {
        zekrPreview.textContent = data[17];
    }
    if (i >= 38 && i <= 137) {
        zekrPreview.textContent = data[18];
    }
    if (i >= 138 && i <= 147) {
        zekrPreview.textContent = data[19];
    }
    if (i >= 148 && i <= 150) {
        zekrPreview.textContent = data[20];
    }
    if (i == 151) {
        zekrPreview.textContent = data[21];
    }
    if (i >= 152 && i <= 251) {
        zekrPreview.textContent = data[22];
    }
    if (i >= 252 && i <= 261) {
        zekrPreview.textContent = data[23];
    }
    if (i > 261) {
        zekrPreview.textContent = "";
    }
}

// azkar 3 function
function azkarThree(data) {
    // Activate Counter For Azkar 3 
    count.onclick = function () {
        azkarThree(azkar3);
        repeat.onclick = function () {
            reset();
            azkarThree(azkar3);
        }
    }
    // Azkar 3 Statements
    counter.textContent = i += 1;
    if (i == 0) {
        zekrPreview.textContent = data[0];
    }
    if (i >= 1 && i <= 3) {
        zekrPreview.textContent = data[1];
    }
    if (i >= 4 && i <= 6) {
        zekrPreview.textContent = data[2];
    }
    if (i >= 7 && i <= 9) {
        zekrPreview.textContent = data[3];
    }
    if (i == 10) {
        zekrPreview.textContent = data[4];
    }
    if (i == 11) {
        zekrPreview.textContent = data[5];
    }
    if (i == 12) {
        zekrPreview.textContent = data[6];
    }
    if (i >= 13 && i <= 16) {
        zekrPreview.textContent = data[7];
    }
    if (i == 17) {
        zekrPreview.textContent = data[8];
    }
    if (i >= 18 && i <= 20) {
        zekrPreview.textContent = data[9];
    }
    if (i >= 21 && i <= 27) {
        zekrPreview.textContent = data[10];
    }
    if (i == 28) {
        zekrPreview.textContent = data[11];
    }
    if (i == 29) {
        zekrPreview.textContent = data[12];
    }
    if (i >= 30 && i <= 32) {
        zekrPreview.textContent = data[13];
    }
    if (i >= 33 && i <= 35) {
        zekrPreview.textContent = data[14];
    }
    if (i == 36) {
        zekrPreview.textContent = data[15];
    }
    if (i == 37) {
        zekrPreview.textContent = data[16];
    }
    if (i == 37) {
        zekrPreview.textContent = data[17];
    }
    if (i >= 38 && i <= 137) {
        zekrPreview.textContent = data[18];
    }
    if (i >= 138 && i <= 147) {
        zekrPreview.textContent = data[19];
    }
    if (i >= 148 && i <= 150) {
        zekrPreview.textContent = data[20];
    }
    if (i == 151) {
        zekrPreview.textContent = data[21];
    }
    if (i >= 152 && i <= 251) {
        zekrPreview.textContent = data[22];
    }
    if (i >= 252 && i <= 261) {
        zekrPreview.textContent = data[23];
    }
    if (i > 261) {
        zekrPreview.textContent = "";
    }
}

// reset function
function reset() {
    i = -1;
}

/********************{All Functions}****************************/


// onload call reset function
window.onload = function () {
    loading.style.display = 'none';
    reset();
    azkarOne(azkar1);
}

//navigation button Toggle
navButton.onclick = function () {
    toggleClassFunc();
}

// Activate Azkar 1 On Clicking azkar 1 list
afterSalahZekr.onclick = function () {
    navigation.classList.toggle('nav-height');
    reset();
    azkarOne(azkar1);
}

// Activate Azkar 2 On Clicking azkar 2 list
saba7Zekr.onclick = function () {
    navigation.classList.toggle('nav-height');
    reset();
    AzkarTwo(azkar2);
}

// Activate Azkar 3 On Clicking azkar 3 list
masa2Zekr.onclick = function () {
    navigation.classList.toggle('nav-height');
    reset();
    azkarThree(azkar3);
}
