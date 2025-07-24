  var Range_of_question = {"ne":true,"konkei":true,"ha":true,"kawa":true,"kazitu":true,"syusi":true,"other":true};
  var Hints = {"syouyakumei":true,"kigen":true,"sihyouseibun":true,"gakumei":true,"kamoku":true,"bui":true};
  var type_of_answer = "syouyakumei"
  const ToA = {"syouyakumei":"生薬名","kigen":"基原","sihyouseibun":"指標成分","gakumei":"学名","kamoku":"科目","bui":"部位"};
  var number_of_Q = 10
  var modedict = {"type":"answercontainer","choose":"choosecontainer"}
  mode = "choose"
  const data = {
  "kawa": {
    "オウバク": {
      "syouyakumei": "オウバク",
      "kigen": "キハダ",
      "gakumei": "Phellodendron amurense",
      "kamoku": "ミカン科",
      "bui": "周皮を除いた樹皮",
      "sihyouseibun": "ベルベリン"
    },
    "ケイヒ": {
      "syouyakumei": "ケイヒ",
      "kigen": "シナニッケイ",
      "gakumei": "Cinnamomum cassia ",
      "kamoku": "クスノキ科",
      "bui": "樹皮",
      "sihyouseibun": "シンナムアルデヒド"
    },
    "コウボク": {
      "syouyakumei": "コウボク",
      "kigen": "ホオノキ",
      "gakumei": "Mangolia obovata",
      "kamoku": "モクレン科",
      "bui": "樹皮",
      "sihyouseibun": "マグノクラリン"
    },
    "トチュウ": {
      "syouyakumei": "トチュウ",
      "kigen": "トチュウ",
      "gakumei": "Eucommia ulumoides",
      "kamoku": "トチュウ科",
      "bui": "樹皮",
      "sihyouseibun": "グッタペルカ"
    },
    "ボタンピ": {
      "syouyakumei": "ボタンピ",
      "kigen": "ボタン",
      "gakumei": "Paeonia suffruticosa",
      "kamoku": "ボタン科",
      "bui": "根皮",
      "sihyouseibun": "ぺオノール"
    }
  },
  "konkei": {
    "チョウトウコウ": {
      "syouyakumei": "チョウトウコウ",
      "kigen": "カギカズラ",
      "gakumei": "Uncaria rhynchophylla",
      "kamoku": "アカネ科",
      "bui": "とげのついた茎",
      "sihyouseibun": "リンコフィリン"
    },
    "ボウイ": {
      "syouyakumei": "ボウイ",
      "kigen": "オオツヅラフジ",
      "gakumei": "Sinomenium acutum",
      "kamoku": "ツヅラフジ科",
      "bui": "つる性の茎および根茎",
      "sihyouseibun": "シノメニン"
    },
    "モクツウ": {
      "syouyakumei": "モクツウ",
      "kigen": "アケビ",
      "gakumei": "Akebia quinata",
      "kamoku": "アケビ科",
      "bui": "つる性の茎",
      "sihyouseibun": "アケビオシド"
    },
    "オウレン": {
      "syouyakumei": "オウレン",
      "kigen": "オウレン",
      "gakumei": "Coptis japonica",
      "kamoku": "キンポウゲ科",
      "bui": "根を除いた根茎",
      "sihyouseibun": "ベルベリン"
    },
    "ガジュツ": {
      "syouyakumei": "ガジュツ",
      "kigen": "ガジュツ",
      "gakumei": "Curcuma zedoaria",
      "kamoku": "ショウガ科",
      "bui": "根茎を湯通しして乾燥したもの",
      "sihyouseibun": "なし"
    },
    "コウブシ": {
      "syouyakumei": "コウブシ",
      "kigen": "ハマスゲ",
      "gakumei": "Cyperus rotundus",
      "kamoku": "カヤツリウサ科",
      "bui": "根茎",
      "sihyouseibun": "αシペロン"
    },
    "サンヤク": {
      "syouyakumei": "サンヤク",
      "kigen": "ヤマノイモ",
      "gakumei": "Dioscoria japonica",
      "kamoku": "ヤマノイモ科",
      "bui": "根茎",
      "sihyouseibun": "ジオスシン"
    },
    "ショウキョウ": {
      "syouyakumei": "ショウキョウ",
      "kigen": "ショウガ",
      "gakumei": "Zingiber officinale",
      "kamoku": "ショウガ科",
      "bui": "根茎（ショウキョウ）",
      "sihyouseibun": "[6]-ギンゲロール（ショウキョウ）"
    },
    "ショウマ": {
      "syouyakumei": "ショウマ",
      "kigen": "サラシナショウマ",
      "gakumei": "Cimicifuga simplex",
      "kamoku": "キンポウゲ科",
      "bui": "根茎",
      "sihyouseibun": "シミゲノール"
    },
    "センキュウ": {
      "syouyakumei": "センキュウ",
      "kigen": "センキュウ",
      "gakumei": "Cnidium officinale",
      "kamoku": "セリ科",
      "bui": "根茎、通例湯通ししたもの",
      "sihyouseibun": "リグスチリド"
    },
    "ソウジュツ": {
      "syouyakumei": "ソウジュツ",
      "kigen": "ホソバオケラ",
      "gakumei": "Atractylodes lancea ",
      "kamoku": "キク科",
      "bui": "根茎",
      "sihyouseibun": "ヒネソール、β-オイデスモール"
    },
    "ダイオウ": {
      "syouyakumei": "ダイオウ",
      "kigen": "モミジバダイオウ",
      "gakumei": "Rheum palmatum",
      "kamoku": "タデ科",
      "bui": "根茎",
      "sihyouseibun": "センノシドA"
    },
    "タクシャ": {
      "syouyakumei": "タクシャ",
      "kigen": "サジオモダカ",
      "gakumei": "Alisma orientale",
      "kamoku": "オモダカ科",
      "bui": "塊茎",
      "sihyouseibun": "アリソールA"
    },
    "チクセツニンジン": {
      "syouyakumei": "チクセツニンジン",
      "kigen": "トチバニンジン",
      "gakumei": "Panax japonicus",
      "kamoku": "ウコギ科",
      "bui": "根茎、湯通ししたもの",
      "sihyouseibun": "チクセツサポニンⅣ"
    },
    "チモ": {
      "syouyakumei": "チモ",
      "kigen": "ハナスゲ",
      "gakumei": "Anemarrhena asphodeloides",
      "kamoku": "ユリ科",
      "bui": "根茎",
      "sihyouseibun": "チモサポニンAⅠ"
    },
    "ハンゲ": {
      "syouyakumei": "ハンゲ",
      "kigen": "カラスビシャク",
      "gakumei": "Pinelia ternata",
      "kamoku": "サトイモ科",
      "bui": "周皮を除いた球茎",
      "sihyouseibun": "ホモゲンチジン酸"
    },
    "ビャクジュツ": {
      "syouyakumei": "ビャクジュツ",
      "kigen": "オケラ",
      "gakumei": "Atractylodes japonica",
      "kamoku": "キク科",
      "bui": "根茎",
      "sihyouseibun": "アトラクチロン"
    },
    "ロートコン": {
      "syouyakumei": "ロートコン",
      "kigen": "ハシリドコロ",
      "gakumei": "Scopolia japonica ",
      "kamoku": "ナス科",
      "bui": "根茎および根",
      "sihyouseibun": "l-ヒヨスチアミン、スコポラミン"
    },
    "サイシン": {
      "syouyakumei": "サイシン",
      "kigen": "ウスバサイシン",
      "gakumei": "Asiasarum sieboldii",
      "kamoku": "ウマノスズグサ科",
      "bui": "根および根茎",
      "sihyouseibun": "メチルオイゲノール"
    },
    "トコン": {
      "syouyakumei": "トコン",
      "kigen": "カルタヘナトコン",
      "gakumei": "Cephaelis ipecacuanha",
      "kamoku": "アカネ科",
      "bui": "根および根茎",
      "sihyouseibun": "エメチン"
    },
    "ボウフウ": {
      "syouyakumei": "ボウフウ",
      "kigen": "ボウフウ",
      "gakumei": "Saposhnikovia divaricata",
      "kamoku": "セリ科",
      "bui": "根および根茎",
      "sihyouseibun": "なし"
    },
    "リュウタン": {
      "syouyakumei": "リュウタン",
      "kigen": "トウリンドウ",
      "gakumei": "Gentiana scabra",
      "kamoku": "リンドウ科",
      "bui": "根および根茎",
      "sihyouseibun": "ゲンチオピクロシド"
    },
    "カンキョウ": {
      "syouyakumei": "カンキョウ",
      "kigen": "ショウガ",
      "gakumei": "Zingiber officinale",
      "kamoku": "ショウガ科",
      "bui": "湯通しまたは蒸してから乾燥した根",
      "sihyouseibun": "[6]-ショウガオール"
    }
  },
  "ne": {
    "オウギ": {
      "syouyakumei": "オウギ",
      "kigen": "キバナオウギ",
      "gakumei": "Astraglus membranaceus",
      "kamoku": "マメ科",
      "bui": "根",
      "sihyouseibun": "アストラガロシドⅣ"
    },
    "オウゴン": {
      "syouyakumei": "オウゴン",
      "kigen": "コガネバナ",
      "gakumei": "Scutellaria baicalensis",
      "kamoku": "シソ科",
      "bui": "周皮を除いた根",
      "sihyouseibun": "バイカリン"
    },
    "オンジ": {
      "syouyakumei": "オンジ",
      "kigen": "イトヒメハギ",
      "gakumei": "Polygala tenuifolia",
      "kamoku": "ヒメハギ科",
      "bui": "根",
      "sihyouseibun": "オンジサポニン"
    },
    "カッコン": {
      "syouyakumei": "カッコン",
      "kigen": "クズ",
      "gakumei": "Pueraria lobata",
      "kamoku": "マメ科",
      "bui": "根",
      "sihyouseibun": "プエラリン"
    },
    "カンゾウ,シャカンゾウ": {
      "syouyakumei": "カンゾウ,シャカンゾウ",
      "kigen": "ウラルカンゾウ",
      "gakumei": "Glycyrrhiza uralensis",
      "kamoku": "マメ科",
      "bui": "根およびストロン",
      "sihyouseibun": "グリチルリチン酸"
    },
    "キキョウ": {
      "syouyakumei": "キキョウ",
      "kigen": "キキョウ",
      "gakumei": "Platycodon grandiflorus",
      "kamoku": "キキョウ科",
      "bui": "根",
      "sihyouseibun": "プラチコディンD"
    },
    "サイコ": {
      "syouyakumei": "サイコ",
      "kigen": "ミシマサイコ",
      "gakumei": "Bupleurum falcatum",
      "kamoku": "セリ科",
      "bui": "根",
      "sihyouseibun": "サイコサポニンa"
    },
    "サイシン": {
      "syouyakumei": "サイシン",
      "kigen": "ウスバサイシン",
      "gakumei": "Asiasarum sieboldii",
      "kamoku": "ウマノスズグサ科",
      "bui": "根および根茎",
      "sihyouseibun": "メチルオイゲノール"
    },
    "ジオウ": {
      "syouyakumei": "ジオウ",
      "kigen": "アカヤジオウ",
      "gakumei": "Rehmannia glutinosa",
      "kamoku": "ゴマノハグサ科",
      "bui": "根もしくは根を蒸して乾燥したもの",
      "sihyouseibun": "スタキオースもしくはマンニノトリオース"
    },
    "シコン": {
      "syouyakumei": "シコン",
      "kigen": "ムラサキ",
      "gakumei": "Lithospermum erythrorhizon",
      "kamoku": "ムラサキ科",
      "bui": "根",
      "sihyouseibun": "シコニン"
    },
    "シャクヤク": {
      "syouyakumei": "シャクヤク",
      "kigen": "シャクヤク",
      "gakumei": "Paeonia lactiflora",
      "kamoku": "ボタン科",
      "bui": "根",
      "sihyouseibun": "ぺオニフロリン"
    },
    "セネガ": {
      "syouyakumei": "セネガ",
      "kigen": "セネガ、ヒロハセネガ",
      "gakumei": "Polygala senega",
      "kamoku": "ヒメハギ科",
      "bui": "根",
      "sihyouseibun": "セネギンⅡ"
    },
    "トウキ": {
      "syouyakumei": "トウキ",
      "kigen": "トウキ",
      "gakumei": "Angelica acutiloba ",
      "kamoku": "セリ科",
      "bui": "根",
      "sihyouseibun": "リグスチリド"
    },
    "トコン": {
      "syouyakumei": "トコン",
      "kigen": "カルタヘナトコン",
      "gakumei": "Cephaelis ipecacuanha",
      "kamoku": "アカネ科",
      "bui": "根および根茎",
      "sihyouseibun": "エメチン"
    },
    "ニンジン": {
      "syouyakumei": "ニンジン",
      "kigen": "オタネニンジン",
      "gakumei": "Panax ginseng ",
      "kamoku": "ウコギ科",
      "bui": "根",
      "sihyouseibun": "ギンセノシド"
    },
    "バクモンドウ": {
      "syouyakumei": "バクモンドウ",
      "kigen": "ジャノヒゲ",
      "gakumei": "Ophiopogon japonicus",
      "kamoku": "ユリ科",
      "bui": "根の肥大部",
      "sihyouseibun": "オフィオポゴニンB"
    },
    "ブシ": {
      "syouyakumei": "ブシ",
      "kigen": "ハナトリカブト",
      "gakumei": "Aconitum carmichaeli",
      "kamoku": "キンポウゲ科",
      "bui": "塊根",
      "sihyouseibun": "ベンゾイルメサコニン"
    },
    "ボウフウ": {
      "syouyakumei": "ボウフウ",
      "kigen": "ボウフウ",
      "gakumei": "Saposhnikovia divaricata",
      "kamoku": "セリ科",
      "bui": "根および根茎",
      "sihyouseibun": "なし"
    },
    "リュウタン": {
      "syouyakumei": "リュウタン",
      "kigen": "トウリンドウ",
      "gakumei": "Gentiana scabra",
      "kamoku": "リンドウ科",
      "bui": "根および根茎",
      "sihyouseibun": "ゲンチオピクロシド"
    },
    "ウコン": {
      "syouyakumei": "ウコン",
      "kigen": "ウコン",
      "gakumei": "Curcuma longa",
      "kamoku": "ショウガ科",
      "bui": "根茎を湯通ししたもの",
      "sihyouseibun": "クルクミン"
    },
    "ロートコン": {
      "syouyakumei": "ロートコン",
      "kigen": "ハシリドコロ",
      "gakumei": "Scopolia japonica ",
      "kamoku": "ナス科",
      "bui": "根茎および根",
      "sihyouseibun": "l-ヒヨスチアミン、スコポラミン"
    },
    "コウジン": {
      "syouyakumei": "コウジン",
      "kigen": "オタネニンジン",
      "gakumei": "Panax ginseng ",
      "kamoku": "ウコギ科",
      "bui": "根(蒸してから乾燥させたもの)",
      "sihyouseibun": "ギンセノシド"
    }
  },
  "kuki": {},
  "hana": {
    "インチンコウ": {
      "syouyakumei": "インチンコウ",
      "kigen": "カワラヨモギ",
      "gakumei": "Artemisia capillaris ",
      "kamoku": "キク科",
      "bui": "頭花",
      "sihyouseibun": "スコパロン"
    },
    "カイカ": {
      "syouyakumei": "カイカ",
      "kigen": "エンジュ",
      "gakumei": "Sophora japonica ",
      "kamoku": "マメ科",
      "bui": "つぼみ",
      "sihyouseibun": "なし"
    },
    "コウカ": {
      "syouyakumei": "コウカ",
      "kigen": "ベニバナ",
      "gakumei": "Carthamus tinctorius",
      "kamoku": "キク科",
      "bui": "花",
      "sihyouseibun": "サフラミンA、カルタミン"
    },
    "サフラン": {
      "syouyakumei": "サフラン",
      "kigen": "サフラン",
      "gakumei": "Crocus sativus",
      "kamoku": "アヤメ科",
      "bui": "柱頭",
      "sihyouseibun": "クロシン、クロセチン"
    },
    "チョウジ": {
      "syouyakumei": "チョウジ",
      "kigen": "チョウジ",
      "gakumei": "Syzygium aromaticum",
      "kamoku": "フトモモ科",
      "bui": "つぼみ",
      "sihyouseibun": "オイゲノール"
    }
  },
  "ha": {
    "ジギタリス": {
      "syouyakumei": "ジギタリス",
      "kigen": "ジギタリス",
      "gakumei": "Digitalis purpurea",
      "kamoku": "ゴマノハグサ科",
      "bui": "葉",
      "sihyouseibun": "ジギトキシン"
    },
    "センナ": {
      "syouyakumei": "センナ",
      "kigen": "チンネベリセンナ",
      "gakumei": "Cassia angustifolia",
      "kamoku": "マメ科",
      "bui": "小葉",
      "sihyouseibun": "センノシドA"
    },
    "ソヨウ": {
      "syouyakumei": "ソヨウ",
      "kigen": "シソ、チリメンジソ",
      "gakumei": "Perilla frutescens",
      "kamoku": "シソ科",
      "bui": "葉および枝先",
      "sihyouseibun": "(-)-ぺリルアルデヒド"
    }
  },
  "syusi": {
    "キョウニン": {
      "syouyakumei": "キョウニン",
      "kigen": "ホンアンズ",
      "gakumei": "Prunus armeniaca",
      "kamoku": "バラ科",
      "bui": "種子",
      "sihyouseibun": "アミグダリン"
    },
    "ケツメイシ": {
      "syouyakumei": "ケツメイシ",
      "kigen": "エビスグサ",
      "gakumei": "Cassia obtusifolia",
      "kamoku": "マメ科",
      "bui": "種子",
      "sihyouseibun": "アウランチオオブツシン"
    },
    "コウベイ": {
      "syouyakumei": "コウベイ",
      "kigen": "イネ",
      "gakumei": "Oryza sativa",
      "kamoku": "イネ科",
      "bui": "種子",
      "sihyouseibun": "なし"
    },
    "サンソウニン": {
      "syouyakumei": "サンソウニン",
      "kigen": "サネブトナツメ",
      "gakumei": "Ziziphus jujuba",
      "kamoku": "クロウメモドキ科",
      "bui": "種子",
      "sihyouseibun": "スピノシン"
    },
    "シャゼンシ": {
      "syouyakumei": "シャゼンシ",
      "kigen": "オオバコ",
      "gakumei": "Plantago asiatica",
      "kamoku": "オオバコ科",
      "bui": "種子",
      "sihyouseibun": "プランタサン"
    },
    "トウニン": {
      "syouyakumei": "トウニン",
      "kigen": "モモ",
      "gakumei": "Prunus persica",
      "kamoku": "バラ科",
      "bui": "種子",
      "sihyouseibun": "アミグダリン"
    },
    "ホミカ": {
      "syouyakumei": "ホミカ",
      "kigen": "マチン",
      "gakumei": "Strychnos nux-vomica",
      "kamoku": "マチン科",
      "bui": "種子",
      "sihyouseibun": "ストリキニーネ、ブルシン"
    },
    "ヨクイニン": {
      "syouyakumei": "ヨクイニン",
      "kigen": "ハトムギ",
      "gakumei": "Coix lacryma-jobi",
      "kamoku": "イネ科",
      "bui": "種皮を除いた種子",
      "sihyouseibun": "なし"
    }
  },
  "kazitu": {
    "ウイキョウ": {
      "syouyakumei": "ウイキョウ",
      "kigen": "ウイキョウ",
      "gakumei": "Foeniculum vulgare",
      "kamoku": "セリ科",
      "bui": "果実",
      "sihyouseibun": "アネトール"
    },
    "キジツ": {
      "syouyakumei": "キジツ",
      "kigen": "ダイダイ、ナツミカン",
      "gakumei": "Citrus aurantium",
      "kamoku": "ミカン科",
      "bui": "未熟な果実",
      "sihyouseibun": "ヘスペリジン"
    },
    "ゴシュユ": {
      "syouyakumei": "ゴシュユ",
      "kigen": "ゴシュユ",
      "gakumei": "Euodia ruticarpa",
      "kamoku": "ミカン科",
      "bui": "果実",
      "sihyouseibun": "エボジアミン"
    },
    "ゴミシ": {
      "syouyakumei": "ゴミシ",
      "kigen": "チョウセンゴミシ",
      "gakumei": "Schisandra chinensis",
      "kamoku": "マツブサ科",
      "bui": "果実",
      "sihyouseibun": "シザンドリン"
    },
    "サンシシ": {
      "syouyakumei": "サンシシ",
      "kigen": "クチナシ",
      "gakumei": "Garenia jasminoides",
      "kamoku": "アカネ科",
      "bui": "果実",
      "sihyouseibun": "クロシン、ゲニポシド"
    },
    "サンシュユ": {
      "syouyakumei": "サンシュユ",
      "kigen": "サンシュユ",
      "gakumei": "Cornus officinalis",
      "kamoku": "ミズキ科",
      "bui": "偽果の果肉",
      "sihyouseibun": "ロガニン"
    },
    "サンショウ": {
      "syouyakumei": "サンショウ",
      "kigen": "サンショウ",
      "gakumei": "Zanthoxylum piperitum",
      "kamoku": "ミカン科",
      "bui": "成熟した果皮",
      "sihyouseibun": "α-サンショオール"
    },
    "タイソウ": {
      "syouyakumei": "タイソウ",
      "kigen": "ナツメ",
      "gakumei": "Ziziphus jujuba",
      "kamoku": "クロウメモドキ科",
      "bui": "果実",
      "sihyouseibun": "なし"
    },
    "チンピ": {
      "syouyakumei": "チンピ",
      "kigen": "ウンシュウミカン",
      "gakumei": "Citrus unshiu",
      "kamoku": "ミカン科",
      "bui": "成熟した果皮を一年以上乾燥させたもの",
      "sihyouseibun": "ヘスペリジン"
    },
    "トウヒ": {
      "syouyakumei": "トウヒ",
      "kigen": "ダイダイ",
      "gakumei": "Citrus aurantium",
      "kamoku": "ミカン科",
      "bui": "成熟した果皮",
      "sihyouseibun": "ヘスペリジン、ナギンギン"
    },
    "マシニン": {
      "syouyakumei": "マシニン",
      "kigen": "アサ",
      "gakumei": "Cannabis sativa",
      "kamoku": "クワ科",
      "bui": "果実",
      "sihyouseibun": "脂肪油"
    },
    "レンギョウ": {
      "syouyakumei": "レンギョウ",
      "kigen": "レンギョウ",
      "gakumei": "Forsythia suspensa",
      "kamoku": "モクセイ科",
      "bui": "果実",
      "sihyouseibun": "オレアノール酸"
    }
  },
  "other": {
    "ゲンノショウコ": {
      "syouyakumei": "ゲンノショウコ",
      "kigen": "ゲンノショウコ",
      "gakumei": "Geranium thunbergii",
      "kamoku": "フウロソウ科",
      "bui": "地上部",
      "sihyouseibun": "ゲラニイン"
    },
    "ジュウヤク": {
      "syouyakumei": "ジュウヤク",
      "kigen": "ドクダミ",
      "gakumei": "Houttuynia cordata",
      "kamoku": "ドクダミ科",
      "bui": "花期の地上部",
      "sihyouseibun": "イソクエルシトリン"
    },
    "センブリ": {
      "syouyakumei": "センブリ",
      "kigen": "センブリ",
      "gakumei": "Swertia japonica",
      "kamoku": "リンドウ科",
      "bui": "花期の全草",
      "sihyouseibun": "スウェルチアマリン"
    },
    "ハッカ": {
      "syouyakumei": "ハッカ",
      "kigen": "ハッカ",
      "gakumei": "Mentha arvensis",
      "kamoku": "シソ科",
      "bui": "地上部",
      "sihyouseibun": "(-)-メントール"
    },
    "マオウ": {
      "syouyakumei": "マオウ",
      "kigen": "マオウ",
      "gakumei": "Ephedra sinica",
      "kamoku": "マオウ科",
      "bui": "地上茎",
      "sihyouseibun": "(-)-エフェドリン"
    },
    "チョレイ": {
      "syouyakumei": "チョレイ",
      "kigen": "チョレイマイタケ",
      "gakumei": "Polyporus umbellatus",
      "kamoku": "サルノコシカケ科",
      "bui": "菌核",
      "sihyouseibun": "エルゴステロール"
    },
    "バッカク": {
      "syouyakumei": "バッカク",
      "kigen": "ライムギ",
      "gakumei": "Secale cereale",
      "kamoku": "イネ科",
      "bui": "菌核",
      "sihyouseibun": "エルゴメトリン"
    },
    "ブクリョウ": {
      "syouyakumei": "ブクリョウ",
      "kigen": "マツホド",
      "gakumei": "Wolfiporia cocos",
      "kamoku": "サルノコシカケ科",
      "bui": "菌核",
      "sihyouseibun": "エルゴステロール"
    },
    "コウイ": {
      "syouyakumei": "コウイ",
      "kigen": "トウモロコシ等",
      "gakumei": "なし",
      "kamoku": "なし",
      "bui": "得られたデンプンを糖化させた飴",
      "sihyouseibun": "マルトース"
    },
    "アセンヤク": {
      "syouyakumei": "アセンヤク",
      "kigen": "ガンビールノキ",
      "gakumei": "Uncaria gambir ",
      "kamoku": "アカネ科",
      "bui": "葉および若枝から得た乾燥水性エキス",
      "sihyouseibun": "カテキン類"
    },
    "アヘン": {
      "syouyakumei": "アヘン",
      "kigen": "ケシ",
      "gakumei": "Papaver somniferum",
      "kamoku": "ケシ科",
      "bui": "未熟果実から得られる乾燥乳液",
      "sihyouseibun": "モルヒネ"
    },
    "アロエ": {
      "syouyakumei": "アロエ",
      "kigen": "ケープアロエ",
      "gakumei": "Aloe ferox",
      "kamoku": "ユリ科",
      "bui": "葉の液汁を乾燥させたもの",
      "sihyouseibun": "バルバロイン"
    },
    "ゴオウ": {
      "syouyakumei": "ゴオウ",
      "kigen": "ウシ",
      "gakumei": "Bos taurus",
      "kamoku": "ウシ科",
      "bui": "ウシの胆嚢に生じた結石",
      "sihyouseibun": "胆汁酸、ビリルビン"
    },
    "センソ": {
      "syouyakumei": "センソ",
      "kigen": "シナヒキガエル",
      "gakumei": "Bufo bufo gargarizans",
      "kamoku": "ヒキガエル科",
      "bui": "毒腺分泌物",
      "sihyouseibun": "レシブフォゲニン"
    },
    "ボレイ": {
      "syouyakumei": "ボレイ",
      "kigen": "カキ",
      "gakumei": "Ostrea gigas",
      "kamoku": "イタボガキ科",
      "bui": "貝殻",
      "sihyouseibun": "炭酸カルシウム"
    },
    "ユウタン": {
      "syouyakumei": "ユウタン",
      "kigen": "ヒグマ",
      "gakumei": "Ursus arctos",
      "kamoku": "クマ科",
      "bui": "胆嚢、胆汁乾燥物",
      "sihyouseibun": "ウルソデオキシコール酸"
    },
    "カッセキ": {
      "syouyakumei": "カッセキ",
      "kigen": "天然の含水ケイ酸アルミニウムのハロサイトおよび二酸化ケイ素からなる鉱物",
      "gakumei": "なし",
      "kamoku": "なし",
      "bui": "なし",
      "sihyouseibun": "なし"
    },
    "セッコウ": {
      "syouyakumei": "セッコウ",
      "kigen": "天然の含水硫酸カルシウムからなる鉱物",
      "gakumei": "なし",
      "kamoku": "なし",
      "bui": "なし",
      "sihyouseibun": "なし"
    },
    "ボウショウ": {
      "syouyakumei": "ボウショウ",
      "kigen": "天然の含水硫酸ナトリウムからなる鉱物",
      "gakumei": "なし",
      "kamoku": "なし",
      "bui": "なし",
      "sihyouseibun": "なし"
    },
    "リュウコツ": {
      "syouyakumei": "リュウコツ",
      "kigen": "大型哺乳動物の化石化した骨",
      "gakumei": "なし",
      "kamoku": "なし",
      "bui": "なし",
      "sihyouseibun": "なし"
    }
  }
}
  
//   console.log(data["ne"]["ウコン"]);
  function ChangeRange(target){
    Range_of_question[target] = !Range_of_question[target];
    console.log(Range_of_question);
  }

  function ChangeHint(target){
    Hints[target] = !Hints[target];
    console.log(Hints);
  }

  function ChangeTarget(target){
    type_of_answer = target;
    console.log(type_of_answer);
  }

  function SetNumberofQ(target){
    number_of_Q = target;
    console.log(number_of_Q);
  }

  function SetMode(target){
    mode = target;
    console.log(mode);
  }

  function StartGame(){
    document.getElementById('config').classList.add('d-none');
    document.getElementById('page_question').classList.remove('d-none');
    document.getElementById('result').classList.add('d-none');
    document.getElementById('Container_answer').classList.add('d-none');
    document.getElementById('textboxlabel').textContent = `答え(${ToA[type_of_answer]})`;
    Questions = MakeQuestion(number_of_Q);
    SetQuestion(Questions[0])
    Progress = 0;
    number_of_correct = 0;
    
  }


function Step1(answer){
    if(mode=="type"){
      submitted_answer = document.getElementById('answertextbox').value;
    }
    else{
      submitted_answer = document.getElementById(answer).textContent;
    }
    console.log("stepped. answer is ",submitted_answer);
    document.getElementById(modedict[mode]).classList.add('d-none');
    if(submitted_answer == Questions[Progress]["Answer"]){
        number_of_correct += 1;
        document.getElementById("C_correction").textContent = "正解！";
    }
    else{
        document.getElementById("C_correction").textContent = "不正解...";
    }
    document.getElementById('Container_answer').classList.remove('d-none');
}
function Step2(){
    document.getElementById('Container_answer').classList.add('d-none');
    Progress += 1;
    document.getElementById('answertextbox').value = "";
    console.log(Progress);
    if(Progress < number_of_Q){
        SetQuestion(Questions[Progress]);
        document.getElementById(modedict[mode]).classList.remove('d-none');
    }
    else{
        FinishGame();
    }
}
function MakeList(){
  var Qlist = {}
  for(key in Range_of_question){
    if(Range_of_question[key] == true){
      Object.assign(Qlist,data[key])
    } 
  }
  console.log("Qlist:",Qlist)
  console.log("length:",Object.keys(Qlist).length)
  return Qlist
}

function SetQuestion(Qdata){
  console.log(Qdata);
  document.getElementById("C_syouyakumei").textContent = Qdata["syouyakumei"];
  document.getElementById("C_kigen").textContent = Qdata["kigen"];
  document.getElementById("C_gakumei").textContent = Qdata["gakumei"];
  document.getElementById("C_kamoku").textContent = Qdata["kamoku"];
  document.getElementById("C_bui").textContent = Qdata["bui"];
  document.getElementById("C_sihyouseibun").textContent = Qdata["sihyouseibun"];
  if(mode=="type"){
    document.getElementById("C_answer").textContent = Qdata["Answer"];
  }
  else if(mode=="choose"){
    document.getElementById("choose1").textContent = Qdata["choose1"];
    document.getElementById("choose2").textContent = Qdata["choose2"];
    document.getElementById("choose3").textContent = Qdata["choose3"];
    document.getElementById("C_answer").textContent = Qdata["Answer"];
  }
  console.log("Question is set.")
  document.getElementById("answercontainer").classList.add("d-none");
  document.getElementById("choosecontainer").classList.add("d-none");
  document.getElementById(modedict[mode]).classList.remove("d-none");
}

function MakeQuestion(number){
    let QuestionList = []
    let RawQuestionList = MakeList();
    
    if(Object.keys(RawQuestionList).length < number){
        var N_o_Q = Object.keys(RawQuestionList).length;
    }
    else{
        var N_o_Q = number
    }
    console.log("N_o_Q",N_o_Q)
    
    if(mode == "type"){
      console.log("type question");
      for(let i=0;i < N_o_Q ;i++){
        var T_number = Math.floor(Math.random()*Object.keys(RawQuestionList).length);
        var Q_rawdata = RawQuestionList[Object.keys(RawQuestionList)[T_number]];
        var Q_data = {};
        console.log("Q_rawdata:",Q_rawdata)
        for(key in Q_rawdata){
            if(Hints[key]){
                Q_data[key] = Q_rawdata[key];
            }
            else{
                Q_data[key] = "-";
            }
        }
        Q_data["Answer"] = Q_rawdata[type_of_answer];
        QuestionList.push(Q_data);
        delete RawQuestionList[Object.keys(RawQuestionList)[T_number]];
      }
    }
    else if(mode == "choose"){
      for(let i=0;i < N_o_Q;i++){
        var T_number = Math.floor(Math.random()*Object.keys(RawQuestionList).length);
        var Q_rawdata = RawQuestionList[Object.keys(RawQuestionList)[T_number]];
        var Q_data = {};
        console.log("Q_rawdata:",Q_rawdata)
        for(key in Q_rawdata){
          if(Hints[key]){
              Q_data[key] = Q_rawdata[key];
          }
          else{
              Q_data[key] = "-";
          }
        }
        Q_data["Answer"] = Q_rawdata[type_of_answer];
        var trueanswer_number = Math.floor(Math.random()*3);
        var fakes = []
        for(key in RawQuestionList){
          fakes.push(RawQuestionList[key][type_of_answer]);
        }
        fakes = Array.from(new Set(fakes));
        fakes = fakes.filter(element => !(element == Q_rawdata[type_of_answer]));
        if(trueanswer_number == 0){
          Q_data["choose1"] = Q_rawdata[type_of_answer];
          Q_data["choose2"] = fakes[Math.floor(Math.random()*fakes.length)];
          fakes = fakes.filter(element => !(element==Q_data["choose2"]));
          Q_data["choose3"] = fakes[Math.floor(Math.random()*fakes.length)];
        }
        if(trueanswer_number == 1){
          Q_data["choose2"] = Q_rawdata[type_of_answer];
          Q_data["choose3"] = fakes[Math.floor(Math.random()*fakes.length)];
          fakes = fakes.filter(element => !(element==Q_data["choose3"]));
          Q_data["choose1"] = fakes[Math.floor(Math.random()*fakes.length)];
        }
        if(trueanswer_number == 2){
          Q_data["choose3"] = Q_rawdata[type_of_answer];
          Q_data["choose1"] = fakes[Math.floor(Math.random()*fakes.length)];
          fakes = fakes.filter(element => !(element==Q_data["choose1"]));
          Q_data["choose2"] = fakes[Math.floor(Math.random()*fakes.length)];
        }
        QuestionList.push(Q_data);
        delete RawQuestionList[Object.keys(RawQuestionList)[T_number]];
        }
      }
    console.log("Question:",QuestionList)
    return QuestionList 
}

document.getElementById("answertextbox").addEventListener("keydown", submit_event);

function FinishGame(){
    updateAccuracy(number_of_correct/number_of_Q);
    document.getElementById('config').classList.add('d-none');
    document.getElementById('page_question').classList.add('d-none');
    document.getElementById('result').classList.remove('d-none');
}

function submit_event(e) {
  if (e.key === "Enter") {
    console.log('回答されました。');
    Step1()
  }  
  return false;
}

function updateAccuracy(percent) {
    const value = Math.max(0, Math.min(percent*100, 100)); // 0-100にクリップ
    document.getElementById('accuracy-value').textContent = `${value}%`;
    const bar = document.getElementById('accuracy-bar');
    bar.style.width = `${value}%`;
    bar.setAttribute('aria-valuenow', value);
    bar.textContent = `${value}%`;
}

function Reset(){
    document.getElementById('config').classList.remove('d-none');
    document.getElementById('page_question').classList.add('d-none');
    document.getElementById('result').classList.add('d-none');

    Progress = 0;
    number_of_correct=0;
    // location.reload();

}