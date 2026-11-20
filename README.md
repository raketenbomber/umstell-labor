# Umstell-Labor ⚡

Ein Lernspiel für die Technikerschule Elektrotechnik: **Formeln umstellen – Runde für Runde schwerer.**
Läuft im Browser und lässt sich auf iPhone und iPad als App installieren, auch offline.

## Spielen

👉 **https://raketenbomber.github.io/umstell-labor/**

**Auf iPhone/iPad installieren:** Link in **Safari** öffnen → Teilen → **Zum Home-Bildschirm**.
Danach einmal mit Internet starten – ab dann funktioniert die App auch offline.

## Modi

| Modus | Worum es geht |
|---|---|
| **Aufstieg** | Der Hauptmodus. 5 Aufgaben pro Runde, 3 Sicherungen als Leben. Erst einfache Formeln, später 2π, Quadrate, Wurzeln, Summen. Ab Runde 3 Baukasten, ab Runde 4 Zeitlimit, ab Runde 5 Rechenaufgaben. |
| **Baukasten** | Die umgestellte Formel selbst zusammensetzen: Bausteine in Zähler oder Nenner, Wurzel an oder aus. Später liegen falsche Bausteine dabei. |
| **Rechnen** | Umstellen, einsetzen, ausrechnen – mit echten Einheiten und Vorsätzen (mH, nF, kΩ …). |
| **Blitz** | 60 Sekunden. Richtig: +2 s, falsch: −3 s. |
| **Brüche** | Kürzen, Hauptnenner, Mal und Geteilt, gemischte Zahlen, Doppelbrüche, Punkt vor Strich, Vergleichen, Dezimalzahl ↔ Bruch, Potenzen, Parallelschaltung mit 1/R, Bruchgleichungen. |
| **Training** | Ohne Zeitdruck und ohne Leben, Themen und Aufgabenart frei wählbar. |

## Inhalt

- **51 Formeln mit 115 Umstellungen** aus acht Themen: Grundlagen, Leistung & Energie, Leitungen & Widerstand, Wechselstrom, Kondensator & Spule, Magnetismus & Feld, Trafo & Maschinen, Schaltungen
- Nach jeder Aufgabe ein **Lösungsweg Schritt für Schritt**
- Falsche Antworten sind typische Fehler (vertauschter Bruch, vergessene Wurzel …)
- Formeln, die oft falsch beantwortet werden, kommen häufiger dran
- **Formelsammlung** mit allen Umstellungen zum Nachschlagen
- Fortschritt und Rekorde werden lokal auf dem Gerät gespeichert

## Dateien

| Datei | Zweck |
|---|---|
| `index.html` | Das komplette Spiel |
| `sw.js` | Service Worker für den Offline-Betrieb |
| `manifest.webmanifest` | App-Name, Icon und Vollbild-Start |
| `*.png` | App-Icons |
| `fonts.css`, `*.woff2` | Schriften (Chakra Petch, IBM Plex Sans, STIX Two Text – SIL Open Font License) |

**Neue Version einspielen:** geänderte Dateien hochladen und in `sw.js` die Zeile `const VERSION = 'ulab-v1';` hochzählen, sonst bleibt die alte Version im Cache.
