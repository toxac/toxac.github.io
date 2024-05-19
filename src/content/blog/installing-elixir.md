# Installing Elixir on Ubuntu using ***asdf***

asdf is general purpose version manager which let's you manage versions and installations for multiple languages including elixir. We will be using asdf for installing and managing elixir versions. If you don't want to setup asdf, you can install elixir and erlang directly.

## Without asdf (ubunt/debian based linux)

```bash
$ sudo apt install erlang-dev elixir
```



you can refer to [official docs](https://elixir-lang.org/install.html) for installation direction for other OS.

## With asdf

i use asdf to manage elixir install. see [asdf guide for more details] (https://asdf-vm.com/guide/getting-started.html#_3-install-asdf). I am using version 0.14.0, which is latest at the time of installation. You can use the latest available version.

### Step 1: Install git and curl

```bash
# check if u have git installed
$ git --version
# if you don't have git then install 
$ sudo apt get install git

# check for curl
$ curl --version
# if you don't have curl, then install
$ sudo apt get install curl git
```

### Step 2: Clone and install

```bash
# Clone the asdf repo and install 
# asdf will be installed in ~/.asdf directory. We will need that to set paths
$ git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.14.0 

```

### Step 3: Add Path to bashrc

```bash
# open bashrc in editor of your choice
$ nano ~/.bashrc

# Add these two lines at the end of the bashrc file
. "$HOME/.asdf/asdf.sh" 
. "$HOME/.asdf/completions/asdf.bash" #for completion

# back in terminal verify asdf installation
$ asdf --version
```

***Note: You might have to close and reopen terminal to verify installation***

### Step 4: Install Erlang

We have to install erlang, if you are not aware elixir runs in erlang virtual machine. So it's a dependency for elixir to run.

```bash
# adding erlang asdf plugin
$ asdf plugin-add erlang https://github.com/asdf-vm/asdf-erlang.git 


# # erlang dependencies for Ubuntu 22.04
$ sudo apt-get -y install build-essential autoconf m4 libncurses5-dev libwxgtk3.0-gtk3-dev libwxgtk-webview3.0-gtk3-dev libgl1-mesa-dev libglu1-mesa-dev libpng-dev libssh-dev unixodbc-dev xsltproc fop libxml2-utils libncurses-dev openjdk-11-jdk 

# # erlang dependencies for Ubuntu 24.04
$ sudo apt-get -y install build-essential autoconf m4 libncurses5-dev libwxgtk3.2-dev libwxgtk-webview3.2-dev libgl1-mesa-dev libglu1-mesa-dev libpng-dev libssh-dev unixodbc-dev xsltproc fop libxml2-utils libncurses-dev openjdk-11-jdk
```

We have all the dependencies installed for erlang, now let's install erlang, Latest stable version for erlang is 26.2. You can check the latest version [here](https://www.erlang.org/downloads)

```bash
# install erlang using asdf
$ asdf install erlang 26.2
# You might see the error asdf_26.2 is not a kerl-managed Erlang/OTP installation, Let worry wait and let it install.

# After you get , Erlang/OTP 26.2 (asdf_26.2) has been successfully built
$ asdf global erlang 26.2

# you can verify
$ asdf current

# Check erlang current version
$ erl -eval 'erlang:display(erlang:system_info(otp_release)), halt().'  -noshell
```

### Step 5: Finally Elixir

This is much similar to what we did with erlang

```bash
# add asdf plugin for elixir
$ asdf plugin-add elixir https://github.com/asdf-vm/asdf-elixir.git
```

My erlang otp version is 26. OTP corresponds to the major release version of erlang. So, if we installed erlang 26.2 corresponding otp will be 26.

```bash
# Let's list all available elixir version for installation
$ asdf list-all elixir

# output
0.12.4
0.12.5
.
.
1.16.2-otp-25
1.16.2-otp-26
.
.
master-otp-24

# Relevant version is 1.16.2-otp-26
# Install elixir
$ asdf install elixir 1.16.2-otp-26

# Activate and make it global
$ asdf global elixir 1.16.2-otp-26

# Verify elixir installation
$ elixir -v
```



We are done!!



### Relevant links:

- asdf: [main website](https://asdf-vm.com/)
- asdf-erlang : [asdf-erlang install instructions](https://github.com/asdf-vm/asdf-erlang)
- erlang: [erlang/OTP install](https://www.erlang.org/downloads)
- elixir : [Elixir Installation](https://elixir-lang.org/install.html)









