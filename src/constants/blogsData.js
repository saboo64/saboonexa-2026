const blogsData = [
  {
    id: 1,
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/blog/aug+2023/full-blog-section/Nexa_0000_telanganatoday.webp',
    title: 'Maruti Suzuki’s iconic SUV, The Jimny hits Hyderabad roads',
    subTitle: 'Telangana Today',
    href: 'https://telanganatoday.com/maruti-suzukis-iconic-suv-the-jimny-hits-hyderabad-roads',
    desc: 'The keys were handed over to customers by Jayesh Ranjan and Vinay Saboo, Chairman & Managing Director in the presence of senior officials from Maruti Suzuki.',
  },
  {
    id: 2,
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/blog/aug+2023/full-blog-section/Nexa_0001_dc.webp',
    title: 'Maruti Suzuki Jimny hits Hyderabad roads',
    subTitle: `Deccan Chronicle`,
    href: 'https://www.deccanchronicle.com/business/autos/210623/maruti-suzuki-jimny-hits-hyderabad-roads.html',
    desc: `The first batch of the iconic SUV from Maruti Suzuki, the Jimny was delivered to customers in Hyderabad here at NEXA Lumbini, RKS Motors on Wednesday. Principal Secretary for ITE&C, Jayesh Ranjan, IAS, was the chief guest at the delivery ceremony.`,
  },
  {
    id: 3,
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/blog/aug+2023/full-blog-section/Nexa_0002_hindimilap.webp',
    title:
      'आरकेएस मोटर्स पर मारुति सुजुकी ने ग्राहकों को सौंपी पहली जिम्नी एसयूवी',
    subTitle: 'Hindi Milap',
    href: 'http://webmilap.com/articlepage.php?articleid=HINDIMIL_HIN_20230622_3_18&width=226px&edition=Hindi%20Milap&curpage=3',
    desc: 'मारुति सुजुकी की एसयूवी जिम्नी की चाभी सौंपते आईटी विभाग के प्रधान सचिव जयेश रंजन। साथ में नेक्सा लुम्बिनी, आरकेएस मोटर्स अध्यक्ष एवं प्रबंध निदेशक विनय साबू व अन्य।',
  },
  {
    id: 4,
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/blog/aug+2023/full-blog-section/Nexa_0003_v6velugu.webp',
    title: 'హైదరాబాద్ కస్టమర్ల చేతికి జిమ్ని',
    subTitle: 'V6 Telugu',
    href: 'https://epaper.v6velugu.com/c/72746567',
    desc: 'మారుతి సుజుకి ఇటీవల విడుదల చేసిన జిమ్ని హైదరాబాద్ మార్కెట్ లోకి ప్రేవేశించింది. సెక్రెటేరియేట్  సమీపం లోని నెక్సా షోరూం నుంచి డెలివరీలు మొదలయ్యాయి. ',
  },
  {
    id: 5,
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/blog/aug+2023/full-blog-section/Nexa_0003_v6velugu.webp',
    title:
      'హైదరాబాద్ లో అందుబాటు లోకి మారుతి సుజుకి ఐకానిక్ ఎస్ యు వీ, ది జిమ్ని',
    subTitle: 'Surya',
    href: 'https://www.suryaepaper.com/clip/120388',
    desc: 'మారుతి సుజుకి నుండి హైదరాబాద్ యొక్క మొదటి బ్యాచ్ ఐకానిక్ ఎస్ యు వీ, ది జిమ్ని బుధవారం నెక్సా లుంబిని, ఆర్ కె ఎస్ మోటార్ ప్రైవేట్ లిమిటెడ్ లో సంతోషకరమైన కస్టమర్లకు డెలివరీ చేయబడింది.',
  },
  {
    id: 6,
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/blog/aug+2023/full-blog-section/Nexa_0003_v6velugu.webp',
    title:
      'హైదరాబాద్ లో అందుబాటు లోకి మారుతి సుజుకి ఐకానిక్ ఎస్ యు వీ, ది జిమ్ని',
    subTitle: `Andhra Prabha`,
    href: 'https://epaper.prabhanews.com/article/Hyderabad?OrgId=226e25ddf97&eid=19&imageview=1&standalone=1&device=desktop',
    desc: `మారుతి సుజుకి నుండి హైదరాబాద్ యొక్క మొదటి బ్యాచ్ ఐకానిక్ ఎస్ యు వీ, ది జిమ్ని బుధవారం నెక్సా లుంబిని, ఆర్ కె ఎస్ మోటార్ ప్రైవేట్ లిమిటెడ్ లో సంతోషకరమైన కస్టమర్లకు డెలివరీ చేయబడింది. `,
  },
  {
    id: 7,
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/blog/aug+2023/full-blog-section/Nexa_0006_thehansindia.webp',
    title: 'Maruti Suzuki delivers Jimny to customers',
    subTitle: 'The Hans India',
    href: 'https://www.thehansindia.com/business/maruti-suzuki-delivers-jimny-to-customers-804645',
    desc: 'Maruti Suzuki has delivered Jimny SUV to customers at Nexa Lumbini, RKS Motor, Hyderabad on Wednesday.',
  },
  // old articles begin here
  {
    id: 8,
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/blogScreen/1.webp',
    title: 'From Luna to Maruti - How Vinay Saboo built his business',
    subTitle: 'Interview for HYBIZTV',
    href: 'https://www.youtube.com/watch?v=xzxj3rTLi10',
    desc: 'Today, RKS Saboo has 4 Arena, 2 Nexa showrooms and 7 workshops spread across the twin cities of Hyderabad and Secunderabad.',
  },
  {
    id: 9,
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/4.webp',
    title: 'Grand Launch of Suzuki Jimny at our Nexa Lumbini',
    subTitle: `Don't miss the opportunity to feast your eyes on these extraordinary masterpieces!`,
    href: '/gallery',
    desc: `"Step into the world of automotive excellence and explore our captivating gallery of new car unveilings. Get ready to be awestruck as you witness the perfect blend of innovation, design, and cutting-edge technology."`,
  },
  {
    id: 10,
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/blog/grand-vitara-blogpost-19-jul.webp',
    title:
      'Maruti Suzuki Grand Vitara Hybrid Will Alert Pedestrians, But There’s A Catch!',
    subTitle:
      'It emits a low-level sound, alerting pedestrians while being driven in EV-only mode',
    href: 'https://www.zigwheels.com/news-features/hybrid-vehicle-news/maruti-suzuki-grand-vitara-hybrid-will-alert-pedestrians-but-theres-a-catch/50447/#leadform',
    desc: 'Maruti Suzuki has introduced a new safety feature in the strong-hybrid variants of the Grand Vitara. Called the  ‘Acoustic Vehicle Alerting System’, it emits a low alert sound that can be heard up to five feet away, to denote that the vehicle is approaching them.',
  },
  {
    id: 11,
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/blog/grand-vitara-blogpost-2-19july.webp',
    title:
      'Maruti Grand Vitara Hybrid SUV price hiked. Check how much more one needs to pay.',
    subTitle:
      'Maruti Suzuki has increased the price of its flagship compact SUV Grand Vitara from Monday, July 17.',
    href: 'https://auto.hindustantimes.com/auto/cars/maruti-suzuki-grand-vitara-hybrid-suv-price-hiked-after-addition-of-this-new-safety-feature-41689648973634.html',
    desc: 'Maruti Suzuki, in a regulatory filing on Monday, said that the AVAS for the Intelligent Electric Hybrid Variants of the Grand Vitara will cost another 4000/- on the existing ex-showroom price. ',
  },

  // {
  //   id: 5,
  //   img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/blogScreen/5.webp',
  //   title: 'Facebook',
  //   subTitle:
  //     '#MarutiSuzuki #Bs-6 #MarutiPetrolCars #SabooMaruti #ThinkMarutiThinkSaboo',
  //   href: 'https://www.facebook.com/saboomaruti/photos/a.735425553239179/3193521747429535/?type=3&theater',
  //   desc: 'Schoose to be the best, explore our driving school, with customised driving lessons from certified and highly trained instructors. Make the right decision.',
  // },
  // {
  //   id: 6,
  //   img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/blogScreen/6.webp',
  //   title: 'Twitter',
  //   subTitle: 'Live-up the drive like never before!',
  //   href: 'https://twitter.com/saboorksmaruti/status/1310456648117317632',
  //   desc: 'SmartPlay studio, centrally located power window switches, auto gear shift, rear parking assist sensor, equipped with dual airbags.',
  // },
  // {
  //   id: 7,
  //   img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/blogScreen/7.webp',
  //   title: 'youtube',
  //   subTitle:
  //     'Saboo RKS | Fully Sanitized Vehicle I Home Delivery | We are Safe and Ready',
  //   href: 'https://www.youtube.com/watch?v=0KCUR1BToDQ',
  //   desc: 'We remain committed to serving our customers while keeping the health and safety front and center. As always, we have and will continue to enable customers to transact from the comfort and safety of their homes. ',
  // },
  // {
  //   id: 8,
  //   img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/blogScreen/8.webp',
  //   title: 'News thehansindia',
  //   subTitle: 'Gaadi Delivered',
  //   href: 'https://www.thehansindia.com/posts/index/Hans/2015-10-29/Gaadi-delivered/183270',
  //   desc: 'Post the launch, RKS Saboo deliovered its first Maruti Suzuki Baleno to customer G Radhika. The key was handed over by Sandeep Kumar Sultania, IAS Transport Commissioner and CMD Vinay Saboo at Nexa Jubilee showroom of Saboo RKS group.',
  // },
];

export { blogsData };
