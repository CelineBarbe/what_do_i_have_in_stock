BEGIN;

INSERT INTO "sewaddict" ("id", "name", "password") VALUES
(1, 'Loutrinette', 'Loutre22');

INSERT INTO "fabric" ("id", "picture", "width", "length", "type", "notice", "color", "sewaddict_id") VALUES
(1, './public/fabrics.jpeg', 140, 100, 'jersey', '', 'bleu', 1),
(2, './public/fabrics.jpeg', 140, 220, 'coton', 'éviter le sèche linge', 'vert', 1),
(3, './public/fabrics.jpeg', 140, 120, 'lainage', 'lavage main', 'jaune à fleurs', 1),
(4, './public/fabrics.jpeg', 115, 140, 'jersey', '', 'galaxy bleu violet', 1),
(5, './public/fabrics.jpeg', 140, 250, 'jersey', '', 'bleu marine', 1);

INSERT INTO "sewing_thread" ("id", "picture", "brand", "color", "type", "reference", "stock", "sewaddict_id") VALUES
(1, './public/threads.jpeg', 'Mettler', 'bleu marine', 'bobine', 'n°100', 1, 1),
(2, './public/threads.jpeg', 'Isacord40', 'rouge', 'cône', 'A6291', 1, 1),
(3, './public/threads.jpeg', 'Guttermann', 'jaune', 'bobine', 'col 177', 2, 1),
(4, './public/threads.jpeg', 'Guttermann', 'rose', 'bobine', 'col 473', 1, 1);

INSERT INTO "sewing_pattern" ("id", "picture", "brand", "name", "type", "target", "sewaddict_id") VALUES
(1, './public/patterns.jpeg', 'Deer and Doe', 'Robe Magolia', 'robe', 'femme', 1),
(2, './public/patterns.jpeg', 'Ivanne S', 'Manteau Magnésium', 'manteau', 'femme', 1),
(3, './public/patterns.jpeg', 'Ellie & Mac', 'Be Amazing Dress and Top', 'robe, top', 'enfant', 1),
(4, './public/patterns.jpeg', 'Ellie & Mac', 'Colorblock zip swimsuit', 'maillot de bains', 'femme', 1);

COMMIT;