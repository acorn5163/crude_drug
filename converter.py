import pandas as pd
import json

df = pd.read_excel("data.xlsx",sheet_name="基本")
print(df.columns[[0]])
df = df.drop(df.columns[[0]],axis=1).fillna("なし")
print(df)

dict = {"kawa":{},"konkei":{},"ne":{},"kuki":{},"hana":{},"ha":{},"syusi":{},"kazitu":{},"other":{}}
for row in df.itertuples():
    dict[row.tag][row.和名] = {"syouyakumei":row.和名,"kigen":row.基原植物,"gakumei":row.基原学名,"kamoku":row.科目,"bui":row.部位,"sihyouseibun":row.指標成分}

print(dict)
with open('data.json', 'w', encoding="utf-8") as f:
    json.dump(dict, f,indent=2,ensure_ascii=False)
print(json.dumps(dict,indent=2,ensure_ascii=False))