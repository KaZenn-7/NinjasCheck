const splitNinjas = require("./func/splitNinjas");
const countByVillage = require("./func/countByVillage");
const formatMessage = require("./func/formatMessage");

let stringg = `🎊👑📛Shirohege D. Welk📛👑🎊
🎊🀄®️Levi Raiunko®️🀄🎊
🎊🀄🦈Izuna hoshigaki🦈🀄🎊
🎊🀄⛓️Maki Hinsei⛓️🀄🎊
🎊🀄〽️Tokito Namikaze〽️🀄🎊
🎊♦️🌘Gojo Urashiki🌘♦️🎊
🎊🃏⛔Lilith Chinoike⛔🃏🎊
🎊🃏✝️Madara Lawliet Kurozumi✝️🃏🎊
🎊🃏♊Karin Hamura♊🃏🎊
🎊🃏☠️Nuvem Kaguya☠️🃏🎊
🎊🔘🐝Notz Kamizuru🐝🔘🎊
🎊🔘🛗Has Kazekage🛗🔘🎊
🎊🔘🈵Suna Chūingamu🈵🔘🎊
🎊🔆👁️‍🗨️Chifuyu Momoshiki👁️‍🗨️🔆🎊

🎊⭕♎Mayuri Kira♎⭕🎊
🎊⭕Ⓜ️Kuroko MomochiⓂ️⭕🎊
🎊⭕🌘Kimiko Urashiki🌘⭕🎊


🎊💠⛔Captine Chinoike⛔💠🎊
🎊💠⛔Kitare Chinoike⛔💠🎊
🎊💠®️Limão.S Raiunko®️💠🎊
🎊💠♎Dazai Kira♎💠🎊
🎊💠🔱Tarumi Terumi🔱💠🎊
🎊💠Ⓜ️Yato MomochiⓂ️💠🎊
🎊💠✨Yukimaru Isshiki✨💠🎊
🎊💠✨Izana Isshiki ✨💠🎊
🎊💠✨Shigaraki Isshiki✨️💠🎊
🎊💠🌘Yuuto Urashiki 🌘💠🎊
🎊💠🌘Tobi Urashiki 🌘💠🎊
🎊💠💫Aizen Kinshiki 💫💠🎊
🎊💠♊Ichigo Hamura♊💠🎊
🎊💠♊Satoro Hamura♊💠🎊
🎊💠☢️ Obito Shirogane ☢️💠🎊
🎊💠🈷️Berserkers soubaki🈷️💠🎊
🎊💠🈷️Ruivo Soubaki🈷️💠🎊
🎊💠⛓️Gaara Hinsei⛓️💠🎊
🎊💠🐝Zeni Kamizuru🐝💠🎊
🎊💠☮️Zenit Kozuki☮️💠


🎊✴️✨Fubuki Isshiki✨✴️🎊
🎊✴️✨Hawks Isshiki✨✴️🎊
🎊✴️💫Gojo Kinshiki💫✴️🎊
🎊✴️🌘Nuvem Urashiki🌘✴️🎊
🎊✴️🌘Obito Urashiki🌘✴️🎊
🎊✴️🔯Belzebu Toneri 🔯✴️🎊
🎊✴️♊Gabimaru Hamura♊✴️🎊
🎊✴️♊Hiroshi Hamura♊✴️🎊
🎊✴️♓Akemi Senju ♓✴️🎊
🎊✴️♓ Ichiya Senju ♓✴️🎊
🎊✴️♣️Tripo Nara♣️✴️🎊
🎊✴️☣️Caco Sarutobi ☣️✴️🎊
🎊✴️☣️Nayuta Sarutobi ☣️✴️🎊
🎊✴️㊗️Gaby Uchiha㊗️✴️🎊
🎊✴️♋Mako Yotsuki♋✴️🎊
🎊✴️🔱Ayumi Terumi🔱✴️🎊
🎊✴️☠️Draven kaguya☠️✴️🎊
🎊✴️🎭Darkness Miko Akasuna🎭✴️🎊
🎊✴️🎭Sasuke Akasuna🎭✴️🎊
🎊✴️🈯Ivy kitaku🈯✴️🎊
🎊✴️🈯Kishyra Kitaku🈯✴️🎊
🎊✴️⛓️Ryan Hinsei⛓️✴️🎊
🎊✴️🕊️Satoro Gojo Bakurei🕊️✴️🎊
🎊✴️☸️Hagoromo Oden☸️✴️🎊

🎊✳️🌟Renzy Kaminari🌟✳️🎊
🎊✳️🌟kuriyama Kaminari🌟✳️🎊
🎊✳️♋Kvar Yotsuki♋✳️🎊
🎊✳️🈵Rin Chūingamu 🈵✳️🎊
🎊✳️〽️Suya Namikaze〽️✳️🎊
🎊✳️♌Raphtalia Hatake♌✳️🎊
🎊✳️⛎Vladmir01 Yamanaka⛎✳️🎊
🎊✳️♓Hagatisumi Senju♓✳️🎊
🎊✳️♓Night senju♓✳️🎊
🎊✳️♓Dormin Senju♓✳️🎊
🎊✳️♓Mitchiuy Senju♓✳️🎊
🎊✳️㊗️Hayato Uchiha㊗️✳️🎊
🎊✳️㊗️Shinobu Uchiha㊗️✳️🎊
🎊✳️☣️Itachi Sarutobi☣️✳️🎊
🎊✳️☣️Bia Sarutobi☣️✳️🎊
🎊✳️☯️Sunless Hyuuga☯️✳️🎊
🎊✳️♣️Nagito Nara♣️✳️🎊
🎊✳️👁️‍🗨️Asta Momoshiki 👁️‍🗨️✳️🎊
🎊✳️👁️‍🗨️Coss Lyw Momoshiki👁️‍🗨️✳️🎊
🎊✳️👁️‍🗨️Scar Momoshiki👁️‍🗨️✳️🎊
🎊✳️🔯Kaio Toneri🔯✳️🎊
🎊✳️♊Sr qin Hamura♊✳️🎊
🎊✳️♊Sora Hamura♊✳️🎊
🎊✳️♊Dylan Hamura♊✳️🎊
🎊✳️♊Rimuru Hamura♊✳️🎊
🎊✳️🌘Haruto Urashiki🌘✳️🎊
🎊✳️🌘Ado Urashiki🌘✳️🎊
🎊✳️🌘Cony Miller Urashiki🌘✳️🎊
🎊✳️💫Morgana Kinshiki💫✳️🎊
🎊✳️💫Violet Kinshiki💫✳️🎊
🎊✳️✨Ryomen Sukuna Isshiki ✨✳️🎊
🎊✳️✨Sheila isshiki✨✳️🎊
🎊✳️✨Tomi isshiki✨✳️🎊
🎊✳️✨Dabi Isshiki✨✳️🎊
🎊✳️✨Kyo Isshiki✨✳️🎊
🎊✳️☠️Hinata smith kaguya☠️✳️🎊
🎊✳️☠️Katoshi Kaguya☠️✳️🎊
🎊✳️☠️Shadow kaguya☠️✳️🎊
🎊✳️🦈Baby Shark Hoshigaki🦈✳🎊
🎊✳️🦈Zac Smith Hoshigaki🦈✳️
🎊✳️Ⓜ️Ylime MomochiⓂ️✳️🎊
🎊✳️Ⓜ️Hope MomochiⓂ️✳️🎊
🎊✳️🈯Blue Diamond Kitaku🈯✳️🎊
🎊✳️🈯Kaito Kitaku 🈯✳️🎊
🎊✳️🈯Gold Kitaku🈯✳️🎊
🎊✳️🕊️D.Ace Bakurei🕊️✳️🎊
🎊✳️🕊️Mimi Bakurei🕊️✳️🎊
🎊✳️🐝Lúcifer Kamizuru🐝✳️🎊
🎊✳️🐝BAT_38 Kamizuru🐝✳️🎊
🎊✳️⛓️Kagami Taiga Hinsei⛓️✳️🎊
🎊✳️🈷️Yuta Okkotsu Soubaki🈷️✳️🎊
🎊✳️🈷️Maki Soubaki 🈷️✳️🎊
🎊✳️🈷️Akari Soubaki🈷️✳️🎊
🎊✳️☢️Powder shirogane☢️✳️🎊
🎊✳️☢️Rin Shirogane☢️✳️🎊
🎊✳️🎭Yorichi Akasuna🎭✳️🎊
🎊✳️🎭Iumy Akasuna🎭✳️🎊
🎊✳️🎭Sasori Akasuna🎭✳️🎊
🎊✳️🕎Shadow Sabaku🕎✳️🎊
🎊✳️🈚Musashi Render🈚✳️🎊
🎊✳️☸️Wsl Oden☸️✳️🎊

🎊🈂️♊Kaguya hamura ♊🈂️🎊
🎊🈂️♊Rip_Luffygg Hamura ♊🈂️🎊
🎊🈂️♊Bella Hamura ♊🈂️🎊
🎊🈂️♊Deusivan Hamura ♊🈂️🎊
🎊🈂️♊Ayla Hamura ♊🈂️🎊
🎊🈂️♊ Tiago_Mandrake Hamura ♊🈂️🎊
🎊🈂️♊Mia Hamura ♊🈂️🎊
🎊🈂️♊ Cabeça raspada Hamura ♊🈂️🎊
🎊🈂️♊ Prontos hamura ♊🈂️🎊
🎊🈂️♊Shadow Hamura ♊🈂️🎊
🎊🈂️♊Tioneji Hamura ♊🈂️🎊
🎊🈂️♊Athena² Hamura ♊🈂️🎊
🎊🈂️♊Mike Hamura ♊🈂️🎊
🎊🈂️♊ Zé Hamura ♊🈂️🎊
🎊🈂️♊Gaara Harumi ♊🈂️🎊
🎊🈂️♊Kaito Hamura ♊🈂️🎊 
🎊🈂️♊Trish Una Hamura ♊🈂️🎊
🎊🈂️♊Megumi hamura♊🈂️🎊
🎊🈂️♊ Morena Hamura ♊🈂️🎊
🎊🈂️♊Antonny Hamura ♊🈂️🎊
🎊🈂️🔯Giblezinn Toneri🔯🈂️🎊
🎊🈂️🔯Hyakkimaru Toneri 🔯🈂️🎊
🎊🈂️🔯Emma Toneri 🔯🈂️🎊
🎊🈂️🔯 Mitsuki Toneri 🔯🈂️🎊
🎊🈂️🔯 Meliodas toneri 🔯🈂️🎊
🎊🈂️🔯Luis Rudy Toneri 🔯🈂️🎊
🎊🈂️🔯Karishi Toneri🔯🈂️🎊
🎊🈂️🔯Isa Toneri 🔯🈂️🎊
🎊🈂️🔯Nezuko toneri 🔯🈂️🎊
🎊🈂️🔯Anny toneri 🔯🈂️🎊
🎊🈂️👁️‍🗨️Mitsuki Momoshiki 👁️‍🗨️🈂️🎊
🎊🈂️👁️‍🗨️Gui Momoshiki 👁️‍🗨️🈂️🎊
🎊🈂️👁️‍🗨️Hiro Momoshiki 👁️‍🗨️🈂️🎊
🎊🈂️👁️‍🗨️Isa Momoshiki 👁️‍🗨️🈂️🎊
🎊🈂️👁️‍🗨️Lucas Momoshiki 👁‍🗨🈂️🎊
🎊🈂️👁️‍🗨️Dark Momoshiki 👁️‍🗨️🈂️🎊
🎊🈂️👁️‍🗨️Yuna Momoshiki 👁️‍🗨️🈂️🎊
🎊🈂️👁️‍🗨️K.whiter Momoshiki 👁️‍🗨️🈂️🎊
🎊🈂️👁️‍🗨️Matadora S.R Momoshiki 👁️‍🗨️🈂️🎊
🎊🈂️👁️‍🗨️Rick Momoshiki 👁️‍🗨️🈂️🎊
🎊🈂️✨Mark isshiki ✨🈂️🎊
🎊🈂️✨Yuki Isshiki✨🈂️🎊
🎊🈂️✨Chopper isshiki✨🈂️🎊
🎊🈂️✨ Faraó isshiki ✨🈂️🎊
🎊🈂️✨Yumi isshiki ✨🈂️🎊
🎊🈂️✨Mus1ca isshiki ✨🈂️🎊
🎊🈂️✨Savana isshiki ✨🈂️🎊
🎊🈂️✨ Sasuke isshiki ✨🈂️🎊
🎊🈂️🌘Miri Urashiki 🌘🈂️🎊
🎊🈂️🌘Mark urashiki 🌘🈂️🎊
🎊🈂️🌘 Lolita Urashiki 🌘🈂️🎊
🎊🈂️🌘 Nixie/Lilith urashiki 🌘 🈂️🎊
🎊🈂️🌘Ana Vih Urashiki 🌘🈂️🎊
🎊🈂️🌘Vany Urashiki 🌘🈂️🎊
🎊🈂️🌘Niti Urashiki 🌘🈂️🎊
🎊🈂️🌘hakari Urashiki 🌘🈂️🎊
🎊🈂️🌘Vitória Urashiki 🌘🈂️🎊
🎊🈂️🌘Goku² Urashiki 🌘🈂️🎊
🎊🈂️🌘Hiro Kazuki urashiki🌘🈂️🎊
🎊🈂️💫Legend Kinshiki 💫🈂️🎊
🎊🈂️💫Kittysune Kinshiki 💫🈂️🎊
🎊🈂️💫Felipe kinshiki💫🈂️🎊
🎊🈂️💫Chris kinshiki 💫🈂️🎊
🎊🈂️💫Kagee kinshiki 💫🈂️🎊
🎊🈂️💫Himawaki kinshiki 💫🈂️🎊
🎊🈂️💫storm kinshiki 💫🈂️🎊
🎊🈂️💫Kiba Kinshiki 💫🈂️🎊
🎊🈂️💫Dr4x Kinshiki 💫🈂️🎊
🎊🈂️🌀Papilson Uzumaki 🌀🈂️🎊
🎊🈂️㊗️ Mikushi Uchiha ㊗️🈂️🎊
🎊🈂️㊗️ Lil Magson Uchiha ㊗️🈂️🎊
🎊🈂️㊗️ Light Uchiha ㊗️🈂️🎊
🎊🈂️㊗️ Rhogsatoudxd Uchiha ㊗️🈂️🎊
🎊🈂️㊗️ Yorokushi Uchiha ㊗️🈂️🎊
🎊🈂️㊗️ Guts² Uchiha ㊗️🈂️🎊
🎊🈂️㊗️Zemlya Uchiha ㊗️🈂️🎊
🎊🈂️㊗️ Kauê Uchiha ㊗️🈂️🎊
🎊🈂️㊗️Law Uchiha ㊗️🈂️🎊
🎊🈂️㊗️Sastu Uchiha ㊗️🈂️🎊
🎊🈂️㊗️Killua Uchiha ㊗️🈂️🎊
🎊🈂️㊗️King Uchiha ㊗️🈂️🎊
🎊🈂️㊗️Shisui¹ Uchiha ㊗️🈂️🎊
🎊🈂️㊗️Gust Uchiha ㊗️🈂️🎊
🎊🈂️㊗️Nawaki Uchiha ㊗️🈂️🎊
🎊🈂️㊗️Takashi Uchiha ㊗️🈂️🎊
🎊🈂️㊗️Jota Uchiha ㊗️🈂️🎊
🎊🈂️㊗️Dazai Uchiha ㊗️🈂️🎊
🎊🈂️㊗️Hayato Uchiha ㊗️🈂️🎊
🎊🈂️㊗️Sdk DinoS3 Uchiha ㊗️🈂️🎊
🎊🈂️㊗️ Luna Uchiha ㊗️🈂️🎊
🎊🈂️㊗️ Takashi Uchiha ㊗️🈂️🎊
🎊🈂️㊗️ Makoto Uchiha ㊗️🈂️🎊
🎊🈂️♓ Felpes Senju ♓🈂️🎊
🎊🈂️♓ Satoro Gojo Senju ♓🈂️🎊
🎊🈂️♓ Seiji Senju ♓🈂️🎊
🎊🈂️♓ Wolcott Senju♓🈂️🎊
🎊🈂️♓ Ezequiel Senju♓🈂️🎊
🎊🈂️♓ Kalebe Senju ♓🈂️🎊
🎊🈂️♓ Okarun Senju♓🈂️🎊
🎊🈂️♓Emi Senju♓🈂️🎊
🎊🈂️♓DuDex Senju ♓🈂️🎊
🎊🈂️♓Yumi senju♓🈂️🎊
🎊🈂️♓South Senju♓🈂️🎊
🎊🈂️♓Myka Senju♓🈂️🎊
🎊🈂️♓Soyeon Senju♓🈂️🎊
🎊🈂️♓Lich Senju♓🈂️🎊
🎊🈂️♓Moon Senju♓🈂️🎊
🎊🈂️♓Zoro Senju♓🈂️🎊
🎊🈂️♓ Asafe Senju♓🈂️🎊
🎊🈂️♓Slva Senju ♓🈂️🎊
🎊🈂️♓Maestro Senju♓️🈂️🎊
🎊🈂️♓Naoki Senju♓🈂️🎊
🎊🈂️♓Painho Senju♓🈂️🎊
🎊🈂️♓Yooko Senju♓🈂️🎊
🎊🈂️♓Kylua senju♓🈂️🎊
🎊🈂️♓Apolo senju♓🈂️🎊
🎊🈂️♓Kira Senju ♓🈂️🎊
🎊🈂️♓Lian Senju♓🈂️🎊
🎊🈂️♓ Renilda Senju♓🈂️🎊
🎊🈂️♓Edmilson Senju♓🈂️🎊
🎊🈂️♓Takamura Senju ♓🈂️🎊
🎊🈂️♓ Felipe_360 Senju ♓ 🈂️🎊
🎊🈂️♓Meliodas Senju♓🈂️🎊
🎊🈂️♓Evil Senju♓🈂️🎊
🎊🈂️♓Ayanokoji Senju♓🈂️🎊
🎊🈂️♓Satoro Gojo Senju ♓🈂️🎊
🎊🈂️♓ Asuka Senju♓🈂️🎊
🎊🈂️♓ Boruto Senju♓🈂️🎊
🎊🈂️♌ Kito Hatake ♌🈂️🎊
🎊🈂️♌ Satoro Gojo Hatake ♌🈂️🎊
🎊🈂️♌ Kakashi Hatake ♌🈂️🎊
🎊🈂️♌Kito Hatake ♌🈂️🎊
🎊🈂️♌Bastião Hatake ♌🈂️🎊
🎊🈂️♌ Ash Hatake ♌ 🈂️🎊
🎊🈂️〽️Zumi Namikaze i〽️🈂️🎊
🎊🈂️〽️Anjin Namikaze 〽️🈂️🎊
🎊🈂️〽️ Frederico Namikaze 〽️🈂️🎊
🎊🈂️〽️Tsuki Namikaze〽️🈂️🎊
🎊🈂️♣️Caio Nara♣️🈂️🎊
🎊🈂️♣️Maya Nara♣️🈂️🎊
🎊🈂️♣️kayra Nara♣️🈂️🎊
🎊🈂️♣️Ban Nara♣️🈂️🎊
🎊🈂️♣️Benjamin Nara♣️🈂️🎊
🎊🈂️♣️Soul Nara♣️🈂️🎊
🎊🈂️🌀Kaito Uzumaki 🌀🈂️🎊
🎊🈂️🌀Konohamaru Uzumaki 🌀🈂️🎊
🎊🈂️☣️Hajime Sarutobi ☣️🈂️🎊
🎊🈂️🎭Ren akasuna 🎭🈂️🎊
🎊🈂️🎭Vinsmog akasuna 🎭 🈂️🎊
🎊🈂️🎭Moroha Akasuna 🎭🈂️🎊
🎊🈂️🎭Mikay Akasuna 🎭 🈂️🎊
🎊🈂️🎭Light Akasuna 🎭 🈂️🎊
🎊🈂️🎭Moroha Akasuna 🎭🈂️🎊
🎊🈂️🎭Natso Akasuna 🎭🈂️🎊
🎊🈂️🎭Lax akasuna 🎭🈂️🎊
🎊🈂️🈷️ João Soubaki 🈷️🈂️🎊
🎊🈂️🈷️ Eddy Soubaki 🈷️🈂️🎊
🎊🈂️🈷️Hyakki Soubaki 🈷️🈂️🎊
🎊🈂️🈷️ Kishimoto Soubaki 🈷️🈂️🎊
🎊🈂️🈷️Yume Soubaki 🈷️🈂️🎊
🎊🈂️🈷️ Kishimoto Soubaki 🈷️🈂️🎊
🎊🈂️🈷️Gleicinha Soubaki 🈷️🈂️🎊
🎊🈂️🈷️ Akira Soubaki 🈷️🈂️🎊
🎊🈂️☢️Tatsu shirogane ☢️🈂️🎊
🎊🈂️☢️Akira shirogane ☢️ 🈂️🎊
🎊🈂️☢️Sem nome Shirogane ☢️🈂️🎊
🎊🈂️☢️Jidelicia Shirogane ☢️🈂️🎊
🎊🈂️☢️Annia shirogane ☢️🈂️🎊
🎊🈂️🈚 kayro Render🈚🈂️🎊
🎊🈂️🕎Ryusuke Sabaku🕎🈂️🎊
🎊🈂️🕎Hanna Sabaku 🕎🈂️🎊
🎊🈂️🦈Leon Hoshigaki 🦈🈂️🎊
🎊🈂️🦈 Cristina Hoshigaki 🦈🈂️🎊
🎊🈂️🦈Young Hoshigaki 🦈 🈂️🎊
🎊🈂️🦈Senku Hoshigaki 🦈🈂️🎊
🎊🈂️🦈Cadver Hoshigaki 🦈🈂️🎊
🎊🈂️🦈Musashi Hoshigaki 🦈🈂️🎊
🎊🈂️🦈Bunny Hoshigaki 🦈🈂️🎊
🎊🈂️🦈Ackerman Hoshigaki 🦈🈂️🎊
🎊🈂️Ⓜ️Hamiko momochi Ⓜ️🈂️🎊
🎊🈂️Ⓜ️ Nobara momochi Ⓜ️🈂️🎊
🎊🈂️Ⓜ️Chusher momochi Ⓜ️🈂️🎊
🎊🈂️Ⓜ️Taek joo momochi Ⓜ️🈂️🎊
🎊🈂️☠️Menma Kaguya ☠️🈂️🎊
🎊🈂️☠️Sofy Kaguya ☠️🈂️🎊
🎊🈂️☠️Minato kaguya ☠️🈂️🎊
🎊🈂️☠️ Mitski kaguya ☠️🈂️🎊
🎊🈂️☠️Sinid kaguya☠️🈂️🎊
🎊🈂️☠️Amelia Kaguya ☠️🈂️🎊
🎊🈂️🔱Orihime Terumi 🔱🈂️🎊
🎊🈂️🔱Emma Terumi 🔱🈂️🎊
🎊🈂️🔱Chronos Terumi 🔱🈂️🎊
🎊🈂️🔱Ayumy Terumi 🔱🈂️🎊
🎊🈂️🔱kokky Terumi 🔱🈂️🎊
🎊🈂️🔱Yamato Terumi 🔱🈂️🎊
🎊🈂️🔱AuroraOlsen08 Terumi 🔱🈂️🎊
🎊🈂️🔱Sury terumi 🔱🈂️🎊
🎊🈂️🔱Eren Terumi 🔱🈂️🎊
🎊🈂️🔱Arly Morgan terumi 🔱🈂️🎊
🎊🈂️🔱Klez Terumi 🔱🈂️🎊
🎊🈂️🌟 Angel_shelby kaminari 🌟🈂️🎊
🎊🈂️🌟Dumilde kaminari 🌟🈂️🎊
🎊🈂️🌟killua kaminari 🌟🈂️🎊
🎊🈂️🌟Icarus Kaminari 🌟🈂️🎊
🎊🈂️🌟Maki Kaminari 🌟🈂️🎊
🎊🈂️🌟Miku kaminari 🌟🈂️🎊
🎊🈂️🌟izuki kaminari 🌟🈂️🎊
🎊🈂️🈵 Harumi Chūingamu 🈵🈂️🎊
🎊🈂️🈵 Habacaxi Chūingamu 🈵🈂️🎊
🎊🈂️🈵 Hōtaro Chūingamu 🈵🈂️🎊
🎊🈂️🈵Mani Chūingamu 🈵🈂️🎊
🎊🈂️⛔Hina Chinoike ⛔🈂️🎊
🎊🈂️⛔ Nash Chinoike ⛔🈂️🎊
🎊🈂️⛔Giyu Chinoike ⛔🈂️🎊
🎊🈂️⛔Aizen chinoike ⛔🈂️🎊
🎊🈂️♋ Kratos Yotsuke ♋🈂️🎊
🎊🈂️♎Sukunayang Kira ♎🈂️🎊
🎊🈂️♎ Madara Kira ♎🈂️🎊
🎊🈂️♋Megami Yotsuke ♋🈂️🎊
🎊🈂️®️Unki Raiunko ®️🈂️🎊
🎊🈂️☸️Indra oden☸️🈂️🎊
🎊🈂️☸️Lin oden ☸️🈂️🎊
🎊🈂️☸️Eren Oden ☸️ 🈂️🎊
🎊🈂️☸️ Gojo Oden ☸️🈂️🎊
🎊🈂️☸️Comendor de xibiu Oden☸️🈂️🎊
🎊🈂️✝️Gato Bruxo kurozumi ✝️🈂️🎊 
🎊🈂️✝️Nelly kurozumi ✝️🈂️🎊
🎊🈂️✝️Zoro Kurozumi ✝️🈂️🎊
🎊🈂️✝️Haru kurozumi✝️🈂️🎊
🎊🈂️✝️Kisami kurozumi ✝️🈂️🎊
🎊🈂️✝️Kai kurozumi ✝️🈂️🎊 
🎊🈂️☮️ Ayumi Kozuki ☮️🈂️🎊
🎊🈂️☮️ Katurga Kozuki ☮️🈂️🎊
🎊🈂️☮️Yuri kozuki☮️🈂️🎊
🎊🈂️☮️Raphtalia Kozuki☮️🈂️🎊
🎊🈂️☮️Eduzo kozuki ☮️🈂️🎊
🎊🈂️☮️Shadowreaper Kozuki ☮️🈂️🎊
🎊🈂️☮️Yumi Kozuki☮️🈂️🎊
🎊🈂️☮️On Kozuki ☮️🈂️🎊
🎊🈂️☮️ Haruki kozuki ☮️🈂️🎊🎊
🎊🈂️☮️Atlas Kozuki ☮️🈂️🎊
🎊🈂️☮️Alex Kozuki ☮️🈂️🎊
🎊🈂️⛓️King Hinsei ⛓️🈂️🎊
🎊🈂️⛓️Naoki Hinsei ⛓️🈂️🎊
🎊🈂️🈯Ruby Kitaku 🈯🈂️🎊
🎊🈂️🈯Lily Kitaku 🈯🈂️🎊
🎊🈂️🈯ino kitaku 🈯🈂️🎊
🎊🈂️🈯Red kitaku 🈯🈂️🎊
🎊🈂️🕊️Hikari Bakurei 🕊️ 🎊
🎊🈂️🕊️ Meliodas bakurei 🕊️🈂️🎊
🎊🈂️🕊️Akashi  Bakurei 🕊️ 🈂️🎊
🎊🈂️🕊️Kaito bakurei🕊️🈂️🎊
🎊🈂️🐝 Tobirama Kamizuru 🐝🈂️🎊
🎊🈂️🐝Morgana kamizuru 🐝🈂️🎊`


main = async () => {

    let oi = await splitNinjas(stringg);

    let results = await countByVillage(oi)

    let msg = await formatMessage(results); 

    console.log(msg);
    

}

main();