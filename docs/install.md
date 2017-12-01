How to install
==============


To install `mk2slide` into your machine you need to clone the repository in https://github.com/lucassabreu/mk2slide, to do this you can run the command:

```sh
git clone https://github.com/lucassabreu/mk2slide
```

Pandoc is a dependency for the command to work, so you must install it in your system. Your OS probaly has a packge for him.

 * **Ubuntu:** `apt-get install pandoc`
 * **Arch Linux:** `pacman -S pandoc`
 * **MAC:** `brew install pandoc`

_If none of the OS above is yours, here is the Pandoc page about Install: [click here](https://pandoc.org/installing.html)_

Once you have the repository and `pandoc`, just go the repository folder and execute the command `sudo make install`, and then you will be able to use the command `mk2slide` anywhere in your system.
