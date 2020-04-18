# Multicraft

**By [Douwe den Blanken](https://nl.linkedin.com/in/douwedenblanken) ([v0xnihili](https://github.com/V0XNIHILI/))**

Enables you to join local multiplayer (LAN) Minecraft worlds while you are using the same Mojang
account as the host. Changes the `displayName` and starts Minecraft immediately after doing this.

**PLEASE NOTE: currently, this only works on macOS!**

## Requirements

Please make sure that you have [NodeJS](https://nodejs.org/en/) installed on your system.

## Initial setup

Open the file `fake_name` and enter your new user name. This should (obviously) different from the
username connected to your Mojang account, else the trick doesn't work.

Next, open a terminal (`⌘ + space` and type `terminal`). Go to the directory where you downloaded this
repository and enter it. Then, run `chmod +x run.sh` to make sure that the script is executable. Now
you are ready to play Minecraft with multiple players in one world on one Mojang account!

## Usage

Open a terminal (`⌘ + space` and type `terminal`). Go to the directory where you downloaded this
repository and type `./run.sh`. This should start Minecraft with your fake user name. This should be
visible in the lower right corner of the launcher.

## Terminal alias

In case you want to set an alias in your terminal so you can start it with a super short command,
add the following line to your `.zshrc` or `.bash_profile`:

```bash
alias mc="cd && cd path/to/multicraftfolder && ./run.sh && cd"
```

Please update `path/to/multicraftfolder` with the path to the folder where you put Multicraft.