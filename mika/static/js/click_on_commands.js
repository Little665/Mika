document.addEventListener('click', (e) => {
    const click_on = e.target; // Uma referência ao objeto que enviou o evento, 
    // por exemplo, se eu clico na tela do navegador, e um evento, e o target
    // captura esse evento
    let commands_colun_moderation = document.querySelector('.commands_colun');
    let commands_colun_information = document.querySelector('.commands_colun_information')
    let commands_colun_diversao = document.querySelector('.commands_colun_diversao')
    let categoria_click = document.querySelector('.click_information')
    let categorai_click_moderation = document.querySelector('.click_moderation')
    let commands_click_diversao = document.querySelector('.click_diversao')

    if(click_on.classList.contains('click_information')) {
    	commands_colun_moderation.style.display = 'none'
    	commands_colun_information.style.display = 'block'
    	commands_colun_diversao.style.display = 'none'
    	categoria_click.classList.add("categorias_click")
    	categorai_click_moderation.classList.remove('categorias_click')
    	commands_click_diversao.classList.remove('categorias_click')
    }

    if(click_on.classList.contains('click_moderation')) {
    	commands_colun_moderation.style.display = 'block'
    	commands_colun_information.style.display = 'none'
    	commands_colun_diversao.style.display = 'none'
    	categoria_click.classList.remove("categorias_click")
    	categorai_click_moderation.classList.add('categorias_click')
    	commands_click_diversao.classList.remove('categorias_click')
    }
    // click_diversao
    if(click_on.classList.contains('click_diversao')) {
    	commands_colun_moderation.style.display = 'none'
    	commands_colun_information.style.display = 'none'
    	commands_colun_diversao.style.display = 'block'
    	categoria_click.classList.remove("categorias_click")
    	categorai_click_moderation.classList.remove('categorias_click')
    	commands_click_diversao.classList.add('categorias_click')
    }




    // to criando uma const que pega esse target e colocando em click_on
    let commands_description_ban = document.querySelector('.command_ban');
    let commands_description_unban = document.querySelector('.command_unban');
    let commands_description_delchannel = document.querySelector('.command_delchannel');
    let commands_description_lock = document.querySelector('.command_lock');
    let commands_description_unlock = document.querySelector('.command_unlock');
    let commands_description_editnick = document.querySelector('.command_editnick');
    let commands_description_addrole = document.querySelector('.command_addrole')
    let commands_description_dm = document.querySelector('.command_dm')
    let commands_description_say = document.querySelector('.command_say')
    let commands_description_channelinfo = document.querySelector('.command_channelinfo')
    let commands_description_emojiinfo = document.querySelector('.command_emojiinfo')
    let commands_description_userinfo = document.querySelector('.command_userinfo')
    let commands_description_stonks = document.querySelector('.command_stonks')
    let commands_description_twitter = document.querySelector('.command_twitter')
    let commands_description_twittersherk = document.querySelector('.command_twittersherk')

    //twittersherk
    if(click_on.classList.contains('cilck_description_twittersherk')) {
    	if(commands_description_twittersherk.style.display == 'none') {
    		commands_description_twittersherk.style.display = "flex";
    	} else {
    		commands_description_twittersherk.style.display = "none";
    	}

    }

    if(click_on.classList.contains('cilck_description_twitter')) {
    	if(commands_description_twitter.style.display == 'none') {
    		commands_description_twitter.style.display = "flex";
    	} else {
    		commands_description_twitter.style.display = "none";
    	}

    }

    if(click_on.classList.contains('cilck_description_stonks')) {
    	if(commands_description_stonks.style.display == 'none') {
    		commands_description_stonks.style.display = "flex";
    	} else {
    		commands_description_stonks.style.display = "none";
    	}

    }

    if(click_on.classList.contains('cilck_description_userinfo')) {
    	if(commands_description_userinfo.style.display == 'none') {
    		commands_description_userinfo.style.display = "flex";
    	} else {
    		commands_description_userinfo.style.display = "none";
    	}

    }

    if(click_on.classList.contains('cilck_description_ban')) {
    	if(commands_description_ban.style.display == 'none') {
    		commands_description_ban.style.display = "flex";
    	} else {
    		commands_description_ban.style.display = "none";
    	}

    }
    // cilck_description_commands
    if(click_on.classList.contains('cilck_description_unban')) {
    	if(commands_description_unban.style.display == 'none') {
    		commands_description_unban.style.display = "flex";
    	} else {
    		commands_description_unban.style.display = "none";
    	}

    }

    if(click_on.classList.contains('cilck_description_delchannel')) {
    	if(commands_description_delchannel.style.display == 'none') {
    		commands_description_delchannel.style.display = "flex";
    	} else {
    		commands_description_delchannel.style.display = "none";
    	}

    }

    if(click_on.classList.contains('cilck_description_lock')) {
    	if(commands_description_lock.style.display == 'none') {
    		commands_description_lock.style.display = "flex";
    	} else {
    		commands_description_lock.style.display = "none";
    	}

    }

    if(click_on.classList.contains('cilck_description_unlock')) {
    	if(commands_description_unlock.style.display == 'none') {
    		commands_description_unlock.style.display = "flex";
    	} else {
    		commands_description_unlock.style.display = "none";
    	}

    }

    if(click_on.classList.contains('cilck_description_editnick')) {
    	if(commands_description_editnick.style.display == 'none') {
    		commands_description_editnick.style.display = "flex";
    	} else {
    		commands_description_editnick.style.display = "none";
    	}

    }

    if(click_on.classList.contains('cilck_description_addrole')) {
    	if(commands_description_addrole.style.display == 'none') {
    		commands_description_addrole.style.display = "flex";
    	} else {
    		commands_description_addrole.style.display = "none";
    	}

    }

    if(click_on.classList.contains('cilck_description_dm')) {
    	if(commands_description_dm.style.display == 'none') {
    		commands_description_dm.style.display = "flex";
    	} else {
    		commands_description_dm.style.display = "none";
    	}

    }

    if(click_on.classList.contains('cilck_description_say')) {
    	if(commands_description_say.style.display == 'none') {
    		commands_description_say.style.display = "flex";
    	} else {
    		commands_description_say.style.display = "none";
    	}

    }
    
    if(click_on.classList.contains('cilck_description_channelinfo')) {
    	if(commands_description_channelinfo.style.display == 'none') {
    		commands_description_channelinfo.style.display = "flex";
    	} else {
    		commands_description_channelinfo.style.display = "none";
    	}

    }

    if(click_on.classList.contains('cilck_description_emojiinfo')) {
    	if(commands_description_emojiinfo.style.display == 'none') {
    		commands_description_emojiinfo.style.display = "flex";
    	} else {
    		commands_description_emojiinfo.style.display = "none";
    	}

    }

})


let show = true; 

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {
    menuSection.classList.toggle("on", show)
    show = !show;
    
})
