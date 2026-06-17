import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
   resources: {
      en: {
         translation: {
            Hello: "Welcome",
            FIRST_SLIDE: {
               SLOGAN: "Tasty and Creative",
               TITLE: "Discover",
               SUB_TITLE: "Best of food"
            },
            SECOND_SLIDE: {
               SLOGAN: "Traditional and Authentical",
               TITLE: "Spanish",
               SUB_TITLE: "Flavors"
            },
            THIRD_SLIDE: {
               SLOGAN: "Inspiration and Innovation",
               TITLE: "Events",
               SUB_TITLE: "Special ambience"
            },
            OUR_MENU: "Our Menu",
            OUR_EVENTS: "Our Events",
            //EVENTS PAGE
            EVENTS_OBJ: {
               EVENT_SECTION_TITLE: "UPCOMING EVENTS",
               EVENT_0: {
                  description:
                     "this is some description this is some this is some description this is some description this is some description this is some description this is some description description"
               },
               EVENT_1: {
                  description:
                     "this is some description this is some this is some description this is some description this is some description this is some description this is some description description"
               }
            },
            EVENTS: "EVENTS",
            UPCOMING_EVENTS: "Upcoming Events",
            EVENT_TITLE_DESC_FIRST: "Feel the rhythm of the endless night, Come and join us!",
            GALLERY: "GALLERY",
            LATEST_PICTURES: "Latest Pictures",
            GALLERY_TITLE_DESC_FIRST: "We tell our story with pictures",
            NO_EVENT_AVAILABLE: "There are no upcoming events at this time.",

            //MENU PAGE
            SPECIALITIES: "Specialities",
            MENU: "Menu",
            HOME_MENU_FIRST_DESCRIPTION: "We offer you a variety of delicious and authentic specialities.",
            HOME_MENU_SECOND_DESCRIPTION: "Choose what suits you best.",
            EVENT_FIRST_DESCRIPTION: "We bring one of the famous singers to Crazy Grill Restaurant.",
            EVENT_SECOND_DESCRIPTION: "Stay tuned for the upcoming events.",
            MENU_HERO_FIRST_DESCRIPTION: "We believe in diversity and that's why Crazy Grill",
            MENU_HERO_SECOND_DESCRIPTION: "offers you a variety of savory dishes.",
            CONTACT_US: "Contact Us",
            WRITE_US: "Write Us",
            NAME: "Name",
            PHONE_NUMBER: "Phone number",
            EMAIL_ADDRESS: "Email address",
            MESSAGE: "Message",
            SEND_MESSAGE: "Send message",
            HEADER: {
               HOME: "Home",
               MENU: "Menu",
               EVENTS: "Events",
               CONTACT: "Contact",
               ENGLISH: "En",
               SPANISH: "Es",
               FRENCH: "Fr"
            },
            CONTACT_SUCCESS_MESSAGE: "Your message has been sent successfully!",
            CONTACT_ERROR_MESSAGE: "An error has occured. Please try again!",
            CONTACT_FIRST_DESCRIPTION: "Use the form below to get in touch with us.",
            CONTACT_SECOND_DESCRIPTION: "We are available online at anytime.",
            FIND_LOCATION_TEXT: "Find our our location",
            HERE: "here",
            DIRECTIONS: "Directions",
            WORKING_HOURS: "Work Hours",
            WORKING_HOURS_TEXT: "Everyday of the week from 12h00 to 23h00.",
            REACH_OUT: "Reach out",
            CALL_US: "Call us",
            EMAIL_US: "Email us",
            MADE_BY: "Made by",
            COPYRIGHT: "Copyright",
            CONTACT_HERO_FIRST_DESCRIPTION: "If you have any inquiries, this is the right",
            CONTACT_HERO_SECOND_DESCRIPTION: "place to get in touch with us.",
            CONTACT_FIRST_DESCRIPTION: "We would like to hear from you about",
            CONTACT_SECOND_DESCRIPTION: "your experience with us.",
            LOCATION: "Location",
            FIND_US: "Find Us",
            CONTACT_MAP_FIRST_DESCRIPTION: "Our location is easy to find, as you can",
            CONTACT_MAP_SECOND_DESCRIPTION: "find your way to Crazy Grill via the map below."
         }
      },
      fr: {
         translation: {
            Hello: "Bienvenu",
            FIRST_SLIDE: {
               SLOGAN: "Savoureux et Créatif",
               TITLE: "Decouvrir",
               SUB_TITLE: "Le meilleur de la nourriture"
            },
            SECOND_SLIDE: {
               SLOGAN: "Traditionnel et Authentique",
               TITLE: "Espagnol",
               SUB_TITLE: "Saveurs"
            },
            THIRD_SLIDE: {
               SLOGAN: "Inspiration et Innovation",
               TITLE: "Evenements",
               SUB_TITLE: "Ambiance spéciale"
            },
            OUR_MENU: "Notre Menu",
            OUR_EVENTS: "Evénements",
            //EVENTS PAGE
            EVENTS_OBJ: {
               EVENT_SECTION_TITLE: "ÉVÈNEMENTS À VENIR",
               EVENT_0: {
                  description:
                     "this is some description this is some this is some description this is some description this is some description this is some description this is some description description"
               },
               EVENT_1: {
                  description:
                     "this is some description this is some this is some description this is some description this is some description this is some description this is some description description"
               }
            },
            EVENTS: "ÉVÈNEMENTS",
            UPCOMING_EVENTS: "Évènements à venir",
            EVENT_TITLE_DESC_FIRST: "Ressentez le rythme de la nuit sans fin, Venez nous rejoindre !",
            GALLERY: "GALERIE",
            LATEST_PICTURES: "Dernières photos",
            GALLERY_TITLE_DESC_FIRST: "Nous racontons notre histoire avec des images",
            NO_EVENT_AVAILABLE: "Il n'y a pas d'événements à venir pour le moment",

            //MENU PAGE
            SPECIALITIES: "Spécialités",
            MENU: "Menu",
            HOME_MENU_FIRST_DESCRIPTION: "Nous vous proposons une variété de spécialités délicieuses et authentiques.",
            HOME_MENU_SECOND_DESCRIPTION: "Choisissez ce qui vous convient le mieux.",
            EVENT_FIRST_DESCRIPTION: "Nous amenons l'un des chanteurs célèbres au restaurant Crazy Grill.",
            EVENT_SECOND_DESCRIPTION: "Restez à l'affût des événements à venir.",
            MENU_HERO_FIRST_DESCRIPTION: "Nous croyons en la diversité et c'est pourquoi Crazy Grill",
            MENU_HERO_SECOND_DESCRIPTION: "vous propose une variété de plats savoureux.",
            CONTACT_US: "Contactez-Nous",
            WRITE_US: "Ecrivez-Nous",
            NAME: "Nom",
            PHONE_NUMBER: "Numéro de téléphone",
            EMAIL_ADDRESS: "E-mail",
            MESSAGE: "Message",
            SEND_MESSAGE: "Envoyer message",
            HEADER: {
               HOME: "Accueil",
               MENU: "Menu",
               EVENTS: "Evénements",
               CONTACT: "Contact",
               ENGLISH: "En",
               SPANISH: "Es",
               FRENCH: "Fr"
            },
            CONTACT_SUCCESS_MESSAGE: "Votre message a été envoyé avec succès!",
            CONTACT_ERROR_MESSAGE: "Une erreur est survenue. Veuillez réessayer!",
            CONTACT_FIRST_DESCRIPTION: "Utilisez le formulaire ci-dessous pour nous contacter.",
            CONTACT_SECOND_DESCRIPTION: "Nous sommes disponibles en ligne à tout moment.",
            FIND_LOCATION_TEXT: "Trouvez notre emplacement",
            HERE: "ici",
            DIRECTIONS: "Directions",
            WORKING_HOURS: "Heures de travail",
            WORKING_HOURS_TEXT: "Tous les jours de la semaine de 12h00 à 23h00.",
            REACH_OUT: "Contactez-nous",
            CALL_US: "Appelez-nous",
            EMAIL_US: "Envoyez-nous un email",
            MADE_BY: "Conçu par",
            COPYRIGHT: "Droit d'auteur",
            CONTACT_HERO_FIRST_DESCRIPTION: "Si vous avez des questions ou des renseingements,",
            CONTACT_HERO_SECOND_DESCRIPTION: "c'est le bon endroit pour nous contacter.",
            CONTACT_FIRST_DESCRIPTION: "Nous aimerions connaître votre",
            CONTACT_SECOND_DESCRIPTION: "expérience avec nous. N'hésitez pas!",
            CONTACT_MAP_FIRST_DESCRIPTION: "Notre emplacement est facile à trouver, car vous pouvez",
            CONTACT_MAP_SECOND_DESCRIPTION: "trouvez votre chemin vers Crazy Grill via la carte ci-dessous."
         }
      },
      es: {
         translation: {
            Hello: "Welcome",
            FIRST_SLIDE: {
               SLOGAN: "Sabroso y Creativo",
               TITLE: "Descubrir",
               SUB_TITLE: "Lo mejor de la comida"
            },
            SECOND_SLIDE: {
               SLOGAN: "Tradicional y Auténtico",
               TITLE: "Español",
               SUB_TITLE: "Sabores"
            },
            THIRD_SLIDE: {
               SLOGAN: "Inspiración e Innovación",
               TITLE: "Eventos",
               SUB_TITLE: "Ambiente Especial"
            },
            OUR_MENU: "Menú",
            OUR_EVENTS: "Eventos",
            //EVENTS PAGE
            EVENTS_OBJ: {
               EVENT_SECTION_TITLE: "PRÓXIMOS EVENTOS",
               EVENT_0: {
                  description:
                     "this is some description this is some this is some description this is some description this is some description this is some description this is some description description"
               },
               EVENT_1: {
                  description:
                     "this is some description this is some this is some description this is some description this is some description this is some description this is some description description"
               }
            },
            EVENTS: "EVENTOS",
            UPCOMING_EVENTS: "Próximos Eventos",
            EVENT_TITLE_DESC_FIRST: "Siente el ritmo de la noche sin fin, ¡Ven y únete a nosotros!",
            NO_EVENT_AVAILABLE: "No hay próximos eventos en este momento.",
            GALLERY: "GALERÍA",
            LATEST_PICTURES: "Últimas fotos",
            GALLERY_TITLE_DESC_FIRST: "Contamos nuestra historia con imágenes",

            //MENU PAGE
            SPECIALITIES: "Especialidades",
            MENU: "Menu",
            HOME_MENU_FIRST_DESCRIPTION: "Te ofrecemos una variedad de deliciosas y auténticas especialidades.",
            HOME_MENU_SECOND_DESCRIPTION: "Elige lo que más te convenga.",
            EVENT_FIRST_DESCRIPTION: "Traemos a uno de los famosos cantantes al restaurante Crazy Grill.",
            EVENT_SECOND_DESCRIPTION: "Estén atentos a los próximos eventos.",
            MENU_HERO_FIRST_DESCRIPTION: "Creemos en la diversidad y por eso Crazy Grill",
            MENU_HERO_SECOND_DESCRIPTION: "te ofrece una variedad de platos salados.",
            CONTACT_US: "Contacta Con Nosotras",
            WRITE_US: "Escribenos",
            NAME: "Nombre",
            PHONE_NUMBER: "Número de teléfono",
            EMAIL_ADDRESS: "Correo electrónico",
            MESSAGE: "Mensaje",
            SEND_MESSAGE: "Enviar mensaje",
            HEADER: {
               HOME: "Bienvenida",
               MENU: "Menú",
               EVENTS: "Eventos",
               CONTACT: "Contacto",
               ENGLISH: "En",
               SPANISH: "Es",
               FRENCH: "Fr"
            },
            CONTACT_SUCCESS_MESSAGE: "¡Tu mensaje ha sido enviado exitosamente!",
            CONTACT_ERROR_MESSAGE: "Se ha producido un error. ¡Inténtalo de nuevo!",
            CONTACT_FIRST_DESCRIPTION: "Utilice el siguiente formulario para ponerse en contacto con nosotras.",
            CONTACT_SECOND_DESCRIPTION: "Estamos disponibles en línea en cualquier momento.",
            FIND_LOCATION_TEXT: "Encuentra nuestra ubicación",
            HERE: "aquí",
            DIRECTIONS: "Direcciones",
            WORKING_HOURS: "Horas Laborales",
            WORKING_HOURS_TEXT: "Todos los días de la semana de 12:00 a 23:00 horas.",
            REACH_OUT: "Contáctenos",
            CALL_US: "Llámenos",
            EMAIL_US: "Envíanos un correo electrónico",
            MADE_BY: "Hecho por",
            COPYRIGHT: "Derecho de autor",
            CONTACT_HERO_FIRST_DESCRIPTION: "Si tiene alguna consulta, este es el lugar",
            CONTACT_HERO_SECOND_DESCRIPTION: "adecuado para ponerse en contacto con nosotros.",
            CONTACT_FIRST_DESCRIPTION: "Nos gustaría saber su experiencia con nosotros. Rellena el formulario",
            CONTACT_SECOND_DESCRIPTION: "y nos pondremos en contacto contigo lo antes posible.",
            CONTACT_MAP_FIRST_DESCRIPTION: "Nuestra ubicación es fácil de encontrar, ya que puede",
            CONTACT_MAP_SECOND_DESCRIPTION: "encuentre su camino a Crazy Grill a través del mapa a continuación."
         }
      }
   },
   lng: "en",
   fallbackLng: "en",

   interpolation: {
      escapeValue: false
   }
});

export default i18n;
