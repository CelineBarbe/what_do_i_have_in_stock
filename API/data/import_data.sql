BEGIN;

INSERT INTO "sewaddict" ("name", "password") VALUES
('Loutrinette', 'Loutre22'),
('Anywaygirl', 'Jamboncosmique');

INSERT INTO "fabric" ("picture", "width", "length", "type", "notice", "color", "sewaddict_id") VALUES
('./public/fabrics.jpeg', 140, 100, 'jersey', null, 'bleu', 1),
('./public/fabrics.jpeg', 140, 220, 'coton', 'éviter le sèche linge', 'vert', 1),
('./public/fabrics.jpeg', 140, 120, 'lainage', 'lavage main', 'jaune à fleurs', 1),
('./public/fabrics.jpeg', 115, 140, 'jersey', null, 'galaxy bleu violet', 2),
('./public/fabrics.jpeg', 140, 250, 'jersey', null, 'bleu marine', 2);

INSERT INTO "sewing_thread" ("picture", "brand", "color", "type", "reference", "stock", "sewaddict_id") VALUES
('./public/threads.jpeg', 'Mettler', 'bleu marine', 'bobine', 'n°100', 1, 1),
('./public/threads.jpeg', 'Isacord40', 'rouge', 'cône', 'A6291', 1, 1),
('./public/threads.jpeg', 'Guttermann', 'jaune', 'bobine', 'col 177', 2, 2),
('./public/threads.jpeg', 'Guttermann', 'rose', 'bobine', 'col 473', 1, 2);

INSERT INTO "sewing_pattern" ("picture", "brand", "name", "type", "target", "sewaddict_id") VALUES
('https://firebasestorage.googleapis.com/v0/b/whatdoihaveinstock.appspot.com/o/patterns.jpeg?alt=media&token=98686edd-62f9-491d-802b-fc7a3c913e23', 'Deer and Doe', 'Robe Magolia', 'robe', 'femme', 1),
('https://firebasestorage.googleapis.com/v0/b/whatdoihaveinstock.appspot.com/o/patterns.jpeg?alt=media&token=98686edd-62f9-491d-802b-fc7a3c913e23', 'Ivanne S', 'Manteau Magnésium', 'manteau', 'femme', 1),
('https://firebasestorage.googleapis.com/v0/b/whatdoihaveinstock.appspot.com/o/patterns.jpeg?alt=media&token=98686edd-62f9-491d-802b-fc7a3c913e23', 'Ellie & Mac', 'Be Amazing Dress and Top', 'robe, top', 'enfant', 2),
('https://firebasestorage.googleapis.com/v0/b/whatdoihaveinstock.appspot.com/o/patterns.jpeg?alt=media&token=98686edd-62f9-491d-802b-fc7a3c913e23', 'Ellie & Mac', 'Colorblock zip swimsuit', 'maillot de bains', 'femme', 2);

COMMIT;