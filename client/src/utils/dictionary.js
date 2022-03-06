export const getText = (language, variable) => {
  return dictionary[language][variable]
}

export const dictionary = {
  en: {
    homeHeadline: "Experience new era of clothing - Doodle Design",
    homeExplanationOne:
      "Doodle Design is an environmentally friendly clothing line that creates clothing that people want to wear",
    homeExplanationTwo:
      "Our goal is to bring together designers and customers to work on new clothing",

    homePointOneText: "High-quality recycled materials",
    homePointTwoText: "Customer recommendations and needs",
    homePointThreeText: "A friendly design suitable for everyone",

    sneakerPaperTitle: "A hot pick for the summer",
    sneakerPaperDescription:
      "The official Doodle Design Sneakers are finally here, 100% made with recycled ocean plastics",

    socksPaperTitle: "Also check out our socks to go with!",
    socksPaperNote: "These socks are made from bamboo",

    homeEndText: "Stay tuned for more to come...",

    address: "Address",
    addressRequired: "Address is required",
    addToCartText: "Add to cart",
    apply: "Apply",
    bankPayment: "Bank payment",
    billingAddress: "Billing address",
    card: "Card",
    cartEmptyText: "Shopping cart empty, go add something!",
    city: "City",
    cityRequired: "City is required",
    cart: "Cart",
    company: "Company",
    confirmation: "Confirmation",
    coupons: "Coupons",
    deliveredTo: "Delivered to",
    deliveryAddress: "Delivery address",
    email: "Email",
    emailRequired: "Email is required",
    emailIncorrect: "Email invalid",
    extraInformation: "Extra information",
    extraInformationDetails:
      "If you have details you would like to add to your order, write them here...",
    firstName: "First name",
    firstNameRequired: "First name is required",
    homeDelivery: "Home delivery",
    homeDeliveryDetails:
      "Delivery straight to your (or your friend's) doorstep",
    installment: "Installment",
    installmentDetails: "Get your package now, pay later",
    lastName: "Last name",
    lastNameRequired: "Last name is required",
    localPayment: "Local payment",
    localPaymentDetails: "Pay at the store",
    loggedIn: "Logged in",
    loggedInNotification: "Logged in!",
    logout: "Logout",
    login: "Login",
    lessThanThirtyChars: "Must be less than 30 characters",
    moreThanFiveChars: "Must be at least 6 characters long",
    method: "Method",
    mustBeDigitsOnly: "Must be digits only",
    mustBeFiveDigits: "Must be 5 digits",
    mustBeTenDigits: "Must be 10 digits",
    newHere: "New here?",
    next: "Next",
    noCategoriesDefined: "No categories defined!",
    noPostiPointsFound: "No Posti points found!",
    openCheckout: "Open checkout",
    orderReceived: "Order received!",
    orders: "Orders",
    overview: "Overview",
    password: "Password",
    parcelAddressMissing: "Pick delivery point",
    passwordAgain: "Password again",
    passwordRequired: "Password is required",
    passwordNoMatch: "Passwords do not match",
    paymentDetails: "Payment details",
    paymentService: "Payment service",
    pending: "Pending",
    phoneNumberPackageTracking: "Phone number (package tracking)",
    pickUpFrom: "Pick up from",
    pickupFromStore: "Pickup from store",
    pictupFromStoreDetails: "Fetch package from our store",
    postiParcel: "Posti parcel",
    postiParcelDetails: "Delivery to a Posti pickup point",
    prePayment: "Prepayment",
    paymentMethodRequired: "Choose payment method",
    prePaymentRequired: "Select prepayment provider",
    prePaymentDetails:
      "Payment using a card, banking applications, or payment services",
    products: "Products",
    installmentRequired: "Select installment provider",
    provider: "Provider",
    purchase: "Purchase",
    ratings: "Ratings",
    ratingsNotImplemented: "Ratings not implemented yet :)",
    recipientIsNotMe: "Recipient is not me",
    register: "Register",
    registeredAlready: "Already have an account?",
    registrationNotification: "Registration successful, welcome!",
    search: "Search",
    searchEmptyText: "Type something to search products!",
    searchNoFoundText: "No products found!",
    settings: "Settings",
    shipping: "Shipping",
    total: "Total",
    update: "Update",
    username: "Username",
    usernameRequired: "Username is required",
    youDetailsAndDeliveredTo: "Your details & delivered to",
    yourDetails: "Your details",
    zipCode: "Zip code",
    zipCodeRequired: "Zip code is required",
    select: "Select",
  },

  fi: {
    homeHeadline: "Koe vaatteiden uusi aikakausi - Doodle Design",
    homeExplanationOne:
      "Doodle Design on ympäristöystävällinen vaatelinja, joka luo vaattetia, joita ihmiset halauavat pitää",
    homeExplanationTwo:
      "Meidän tavoitteemme on tuoda suunnittelijat ja asiakkaat yhteen uusien vaatteiden luomisessa",

    homePointOneText: "Korkealaatuisia kierrätettyjä materiaaleja",
    homePointTwoText: "Asiakkaiden suositukset ja tarpeet",
    homePointThreeText: "Ystävällinen design joka sopii kaikille",

    sneakerPaperTitle: "Kuuma valinta kesälle",
    sneakerPaperDescription:
      "Official Doodle Design lenkkarit ovat viimein täällä, 100% kierrätettyä merimuovia",

    socksPaperTitle: "Tsekkaa myös mukaan meidän sukkia!",
    socksPaperNote: "Sukkien materiaalina on käytetty bambua",

    homeEndText: "Lisää tulossa...",

    select: "Valitse",
    address: "Osoite",
    addressRequired: "Osoite on pakollinen",
    addToCartText: "Lisää ostoksiin",
    apply: "Käytä",
    bankPayment: "Pankkimaksu",
    billingAddress: "Laskutusosoite",
    card: "Kortti",
    cart: "Ostoskärry",
    cartEmptyText: "Ostoskärry tyhjä, lisää jotain!",
    city: "Kaupunki",
    cityRequired: "Kaupunki on pakollinen",
    company: "Yritys",
    coupons: "Kupongit",
    confirmation: "Vahvistus",
    deliveredTo: "Toimitetaan",
    deliveryAddress: "Toimitusosoite",
    email: "Sähköposti",
    emailRequired: "Sähköposti on pakollinen",
    emailIncorrect: "Sähköposti virheellinen",
    installmentRequired: "Valitse osamaksutapa",
    extraInformation: "Lisätiedot",
    extraInformationDetails: "Tarkennuksia tilaukseen liittyen...",
    firstName: "Etunimi",
    firstNameRequired: "Etunimi on pakollinen",
    homeDelivery: "Kotiinkuljetus",
    homeDeliveryDetails:
      "Kuljetus suoraan sinun (tai kaverisi) kotiovelle",
    installment: "Osamaksu",
    installmentDetails: "Saa pakettisi nyt, maksa myöhemmin",
    lastName: "Sukunimi",
    lastNameRequired: "Sukunimi on pakollinen",
    localPayment: "Paikallismaksu",
    localPaymentDetails: "Maksa paikan päällä",
    loggedIn: "Kirjautunut",
    loggedInNotification: "Sisäänkirjautuminen onnistui!",
    logout: "Kirjaudu ulos",
    login: "Kirjaudu sisään",
    lessThanThirtyChars: "Täytyy olla alle 30 kirjainta",
    moreThanFiveChars: "Täytyy olla ainakin 6 kirjainta pitkä",
    method: "Tapa",
    mustBeDigitsOnly: "Vain numeroita",
    mustBeFiveDigits: "Täytyy olla 5 numeroa",
    mustBeTenDigits: "Täytyy olla 10 numeroa",
    newHere: "Uusi asiakas?",
    next: "Seuraava",
    noCategoriesDefined: "Kategorioita ei ole määritelty!",
    noPostiPointsFound: "Postipisteitä ei löytynyt!",
    openCheckout: "Kassalle",
    orderReceived: "Tilaus vastaanotettu!",
    orders: "Tilaukset",
    overview: "Yleiskatsaus",
    parcelAddressMissing: "Valitse toimituspiste",
    password: "Salasana",
    passwordAgain: "Salasana uudestaan",
    passwordRequired: "Salasana on pakollinen",
    passwordNoMatch: "Salasanat eivät täsmää",
    paymentDetails: "Maksutiedot",
    paymentService: "Maksupalvelu",
    paymentMethodRequired: "Valitse maksutapa",
    pending: "Odottaa",
    phoneNumberPackageTracking: "Puhelinnumero (paketin seuraus)",
    pickUpFrom: "Poimi osoitteesta",
    pickupFromStore: "Poimi kaupasta",
    pictupFromStoreDetails: "Poimi paketti kaupastamme",
    postiParcel: "Postipaketti",
    postiParcelDetails: "Kuljetus Postin pakettipisteeseen",
    prePayment: "Esimaksu",
    prePaymentRequired: "Valitse esimaksutapa",
    prePaymentDetails: "Maksa kortilla, pankki- tai maksupalveluilla",
    products: "Tuotteet",
    provider: "Palveluntarjoaja",
    purchase: "Osta",
    ratings: "Arvostelut",
    ratingsNotImplemented: "Arvosteluita ei ole vielä kehitetty :)",
    recipientIsNotMe: "Minä en ole paketin vastaanottaja",
    register: "Rekisteröidy",
    registeredAlready: "Onko sinulla jo käyttäjätili?",
    registrationNotification:
      "Rekisteröityminen onnistui, tervetuloa!",
    search: "Hae",
    searchEmptyText: "Kirjoita jotain hakeaksesi tuotteita!",
    searchNoFoundText: "Tuotteita ei löytynyt!",
    settings: "Asetukset",
    shipping: "Toimitus",
    total: "Yhteensä",
    update: "Päivitä",
    username: "Käyttäjänimi",
    usernameRequired: "Käyttäjänimi on pakollinen",
    youDetailsAndDeliveredTo: "Tietosi & toimitusosoite",
    yourDetails: "Tietosi",
    zipCode: "Zip",
    zipCodeRequired: "Zip on pakollinen",
  },
}
