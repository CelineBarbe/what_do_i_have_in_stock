# Data dictionnary

## Sewaddict table

| Field Name | Data Type | Specificities | Description |
|--|--|--|--|
| id | INT | GENERATED ALWAYS AS IDENTITY PRIMARY KEY, NOT NULL | Sewaddict identification number |
|name|TEXT|NOT NULL|name pf the sewaddict|
|password|TEXT|NOT NULL|Password for the connection|

## Fabric Table

| Field Name | Data Type | Specificities | Description |
|--|--|--|--|
| id | INT | GENERATED ALWAYS AS IDENTITY PRIMARY KEY, NOT NULL | Fabric identification number |
|picture|TEXT|DEFAULT './public/fabrics.jpeg'|Picture of the fabric|
|width|INT|NOT NULL DEFAULT 140|Width of the fabric|
|length|INT|NOT NULL|Length of the fabric|
|type|TEXT|--|Type of the fabric (jersey, coton, wool...)|
|notice|TEXT|--|Element for the cleaning for exemple or some other advices|
|color|TEXT|--|Color of the fabric|


## Sewing_thread Table

| Field Name | Data Type | Specificities | Description |
|--|--|--|--|
| id | INT | GENERATED ALWAYS AS IDENTITY PRIMARY KEY, NOT NULL | Sewing thread identification number |
|picture|TEXT|DEFAULT './public/threads.jpeg'|Picture of the sewing thread|
|brand|TEXT|--|Brand of the sewing thread|
|color|TEXT|--|Color of the sewing thread|
|type|TEXT|DEFAULT 'bobine'|Type : 'bobine' or 'cône'|
|reference|TEXT|--|Any combinaison of letters and numbers who may identify the precise color to buy the exact same|
|stock|INT|--|Number of pieces of this sewing thread in stock|

## Sewing_pattern Table

| Field Name | Data Type | Specificities | Description |
|--|--|--|--|
| id | INT | GENERATED ALWAYS AS IDENTITY PRIMARY KEY, NOT NULL | Sewing pattern identification number |
|picture|TEXT|DEFAULT './public/patterns.jpeg'|Picture of the sewing pattern|
|brand|TEXT|--|Brand of the sewing pattern|
|name|TEXT|--|Title of the pattern|
|type|TEXT|--|If it's a top, a coat, a dress...|
|target|TEXT|--|If it's for a woman, a child, a man or is it a piece of accessory|














