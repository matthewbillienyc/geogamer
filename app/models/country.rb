class Country
  # attr_reader :count
  # def initialize
  #   @country = Country.choose_random_country
  # end

  def self.country_list
    [
    {"name": "Afghanistan", "code": "AF"},
    {"name": "Aland Islands", "code": "AX"},
    {"name": "Albania", "code": "AL"},
    {"name": "Algeria", "code": "DZ"},
    {"name": "American Samoa", "code": "AS"},
    {"name": "Andorra", "code": "AD"},
    {"name": "Angola", "code": "AO"},
    {"name": "Anguilla", "code": "AI"},
    {"name": "Antarctica", "code": "AQ"},
    {"name": "Antigua and Barbuda", "code": "AG"},
    {"name": "Argentina", "code": "AR"},
    {"name": "Armenia", "code": "AM"},
    {"name": "Aruba", "code": "AW"},
    {"name": "Australia", "code": "AU"},
    {"name": "Austria", "code": "AT"},
    {"name": "Azerbaijan", "code": "AZ"},
    {"name": "Bahamas", "code": "BS"},
    {"name": "Bahrain", "code": "BH"},
    {"name": "Bangladesh", "code": "BD"},
    {"name": "Barbados", "code": "BB"},
    {"name": "Belarus", "code": "BY"},
    {"name": "Belgium", "code": "BE"},
    {"name": "Belize", "code": "BZ"},
    {"name": "Benin", "code": "BJ"},
    {"name": "Bermuda", "code": "BM"},
    {"name": "Bhutan", "code": "BT"},
    {"name": "Bolivia", "code": "BO"},
    {"name": "Bosnia and Herzegovina", "code": "BA"},
    {"name": "Botswana", "code": "BW"},
    {"name": "Bouvet Island", "code": "BV"},
    {"name": "Brazil", "code": "BR"},
    {"name": "British Indian Ocean Territory", "code": "IO"},
    {"name": "British Virgin Islands", "code": "VG"},
    {"name": "Brunei", "code": "BN"},
    {"name": "Bulgaria", "code": "BG"},
    {"name": "Burkina Faso", "code": "BF"},
    {"name": "Burundi", "code": "BI"},
    {"name": "Cambodia", "code": "KH"},
    {"name": "Cameroon", "code": "CM"},
    {"name": "Canada", "code": "CA"},
    {"name": "Cape Verde", "code": "CV"},
    {"name": "Cayman Islands", "code": "KY"},
    {"name": "Central African Republic", "code": "CF"},
    {"name": "Chad", "code": "TD"},
    {"name": "Chile", "code": "CL"},
    {"name": "China", "code": "CN"},
    {"name": "Christmas Island", "code": "CX"},
    {"name": "Cocos Islands", "code": "CC"},
    {"name": "Colombia", "code": "CO"},
    {"name": "Comoros", "code": "KM"},
    {"name": "Cook Islands", "code": "CK"},
    {"name": "Costa Rica", "code": "CR"},
    {"name": "Croatia", "code": "HR"},
    {"name": "Cuba", "code": "CU"},
    {"name": "Curacao"},
    {"name": "Cyprus", "code": "CY"},
    {"name": "Czech Republic", "code": "CZ"},
    {"name": "Denmark", "code": "DK"},
    {"name": "Djibouti", "code": "DJ"},
    {"name": "Dominica", "code": "DM"},
    {"name": "Dominican Republic", "code": "DO"},
    {"name": "Ecuador", "code": "EC"},
    {"name": "Egypt", "code": "EG"},
    {"name": "El Salvador", "code": "SV"},
    {"name": "Equatorial Guinea", "code": "GQ"},
    {"name": "Eritrea", "code": "ER"},
    {"name": "Estonia", "code": "EE"},
    {"name": "Ethiopia", "code": "ET"},
    {"name": "Falkland Islands", "code": "FK"},
    {"name": "Faroe Islands", "code": "FO"},
    {"name": "Fiji", "code": "FJ"},
    {"name": "Finland", "code": "FI"},
    {"name": "France", "code": "FR"},
    {"name": "French Guiana", "code": "GF"},
    {"name": "French Polynesia", "code": "PF"},
    {"name": "French Southern Territories", "code": "TF"},
    {"name": "Gabon", "code": "GA"},
    {"name": "Gambia", "code": "GM"},
    {"name": "Georgia", "code": "GE"},
    {"name": "Germany", "code": "DE"},
    {"name": "Ghana", "code": "GH"},
    {"name": "Gibraltar", "code": "GI"},
    {"name": "Greece", "code": "GR"},
    {"name": "Greenland", "code": "GL"},
    {"name": "Grenada", "code": "GD"},
    {"name": "Guadeloupe", "code": "GP"},
    {"name": "Guam", "code": "GU"},
    {"name": "Guatemala", "code": "GT"},
    {"name": "Guernsey", "code": "GG"},
    {"name": "Guinea", "code": "GN"},
    {"name": "Guinea-Bissau", "code": "GW"},
    {"name": "Guyana", "code": "GY"},
    {"name": "Haiti", "code": "HT"},
    {"name": "Honduras", "code": "HN"},
    {"name": "Hong Kong", "code": "HK"},
    {"name": "Hungary", "code": "HU"},
    {"name": "Iceland", "code": "IS"},
    {"name": "India", "code": "IN"},
    {"name": "Indonesia", "code": "ID"},
    {"name": "Iran", "code": "IR"},
    {"name": "Iraq", "code": "IQ"},
    {"name": "Ireland", "code": "IE"},
    {"name": "Isle of Man", "code": "IM"},
    {"name": "Israel", "code": "IL"},
    {"name": "Italy", "code": "IT"},
    {"name": "Ivory Coast"},
    {"name": "Jamaica", "code": "JM"},
    {"name": "Japan", "code": "JP"},
    {"name": "Jersey", "code": "JE"},
    {"name": "Jordan", "code": "JO"},
    {"name": "Kazakhstan", "code": "KZ"},
    {"name": "Kenya", "code": "KE"},
    {"name": "Kiribati", "code": "KI"},
    {"name": "Kuwait", "code": "KW"},
    {"name": "Kyrgyzstan", "code": "KG"},
    {"name": "Laos", "code": "LA"},
    {"name": "Latvia", "code": "LV"},
    {"name": "Lebanon", "code": "LB"},
    {"name": "Lesotho", "code": "LS"},
    {"name": "Liberia", "code": "LR"},
    {"name": "Libya", "code": "LY"},
    {"name": "Liechtenstein", "code": "LI"},
    {"name": "Lithuania", "code": "LT"},
    {"name": "Luxembourg", "code": "LU"},
    {"name": "Macao", "code": "MO"},
    {"name": "Macedonia", "code": "MK"},
    {"name": "Madagascar", "code": "MG"},
    {"name": "Malawi", "code": "MW"},
    {"name": "Malaysia", "code": "MY"},
    {"name": "Maldives", "code": "MV"},
    {"name": "Mali", "code": "ML"},
    {"name": "Malta", "code": "MT"},
    {"name": "Marshall Islands", "code": "MH"},
    {"name": "Martinique", "code": "MQ"},
    {"name": "Mauritania", "code": "MR"},
    {"name": "Mauritius", "code": "MU"},
    {"name": "Mayotte", "code": "YT"},
    {"name": "Mexico", "code": "MX"},
    {"name": "Micronesia", "code": "FM"},
    {"name": "Moldova", "code": "MD"},
    {"name": "Monaco", "code": "MC"},
    {"name": "Mongolia", "code": "MN"},
    {"name": "Montenegro"},
    {"name": "Montserrat", "code": "MS"},
    {"name": "Morocco", "code": "MA"},
    {"name": "Mozambique", "code": "MZ"},
    {"name": "Myanmar", "code": "MM"},
    {"name": "Namibia", "code": "NA"},
    {"name": "Nauru", "code": "NR"},
    {"name": "Nepal", "code": "NP"},
    {"name": "Netherlands", "code": "NL"},
    {"name": "New Caledonia", "code": "NC"},
    {"name": "New Zealand", "code": "NZ"},
    {"name": "Nicaragua", "code": "NI"},
    {"name": "Niger", "code": "NE"},
    {"name": "Nigeria", "code": "NG"},
    {"name": "Niue", "code": "NU"},
    {"name": "Norfolk Island", "code": "NF"},
    {"name": "North Korea", "code": "KP"},
    {"name": "Northern Mariana Islands", "code": "MP"},
    {"name": "Norway", "code": "NO"},
    {"name": "Oman", "code": "OM"},
    {"name": "Pakistan", "code": "PK"},
    {"name": "Palau", "code": "PW"},
    {"name": "Panama", "code": "PA"},
    {"name": "Papua New Guinea", "code": "PG"},
    {"name": "Paraguay", "code": "PY"},
    {"name": "Peru", "code": "PE"},
    {"name": "Philippines", "code": "PH"},
    {"name": "Pitcairn", "code": "PN"},
    {"name": "Poland", "code": "PL"},
    {"name": "Portugal", "code": "PT"},
    {"name": "Puerto Rico", "code": "PR"},
    {"name": "Qatar", "code": "QA"},
    {"name": "Republic of the Congo", "code": "CG"},
    {"name": "Reunion", "code": "RE"},
    {"name": "Romania", "code": "RO"},
    {"name": "Russia", "code": "RU"},
    {"name": "Rwanda", "code": "RW"},
    {"name": "Saint Helena", "code": "SH"},
    {"name": "Saint Kitts and Nevis", "code": "KN"},
    {"name": "Saint Lucia", "code": "LC"},
    {"name": "Saint Martin"},
    {"name": "Saint Pierre and Miquelon", "code": "PM"},
    {"name": "Saint Vincent and the Grenadines", "code": "VC"},
    {"name": "Samoa", "code": "WS"},
    {"name": "San Marino", "code": "SM"},
    {"name": "Sao Tome and Principe", "code": "ST"},
    {"name": "Saudi Arabia", "code": "SA"},
    {"name": "Senegal", "code": "SN"},
    {"name": "Serbia"},
    {"name": "Seychelles", "code": "SC"},
    {"name": "Sierra Leone", "code": "SL"},
    {"name": "Singapore", "code": "SG"},
    {"name": "Slovakia", "code": "SK"},
    {"name": "Slovenia", "code": "SI"},
    {"name": "Solomon Islands", "code": "SB"},
    {"name": "Somalia", "code": "SO"},
    {"name": "South Africa", "code": "ZA"},
    {"name": "South Korea"},
    {"name": "South Sudan"},
    {"name": "South Georgia and the South Sandwich Islands", "code": "GS"},
    {"name": "Spain", "code": "ES"},
    {"name": "Sri Lanka", "code": "LK"},
    {"name": "Sudan", "code": "SD"},
    {"name": "Suriname", "code": "SR"},
    {"name": "Svalbard and Jan Mayen", "code": "SJ"},
    {"name": "Swaziland", "code": "SZ"},
    {"name": "Sweden", "code": "SE"},
    {"name": "Switzerland", "code": "CH"},
    {"name": "Syria", "code": "SY"},
    {"name": "Taiwan", "code": "TW"},
    {"name": "Tajikistan", "code": "TJ"},
    {"name": "Tanzania", "code": "TZ"},
    {"name": "Thailand", "code": "TH"},
    {"name": "Togo", "code": "TG"},
    {"name": "Tokelau", "code": "TK"},
    {"name": "Tonga", "code": "TO"},
    {"name": "Trinidad and Tobago", "code": "TT"},
    {"name": "Tunisia", "code": "TN"},
    {"name": "Turkey", "code": "TR"},
    {"name": "Turkmenistan", "code": "TM"},
    {"name": "Turks and Caicos Islands", "code": "TC"},
    {"name": "Tuvalu", "code": "TV"},
    {"name": "Uganda", "code": "UG"},
    {"name": "Ukraine", "code": "UA"},
    {"name": "United Arab Emirates", "code": "AE"},
    {"name": "United Kingdom", "code": "GB"},
    {"name": "United States", "code": "US"},
    {"name": "United States Minor Outlying Islands", "code": "UM"},
    {"name": "Uruguay", "code": "UY"},
    {"name": "Uzbekistan", "code": "UZ"},
    {"name": "Vanuatu", "code": "VU"},
    {"name": "Venezuela", "code": "VE"},
    {"name": "Vietnam", "code": "VN"},
    {"name": "US Virgin Islands", "code": "VI"},
    {"name": "Wallis and Futuna", "code": "WF"},
    {"name": "Western Sahara", "code": "EH"},
    {"name": "Yemen", "code": "YE"},
    {"name": "Zambia", "code": "ZM"},
    {"name": "Zimbabwe", "code": "ZW"}
    ]
  end

  def self.choose_random_country
    return Country.country_list.sample[:name]
  end

  def self.all_names
    country_list.map { |hash| hash[:name] }
  end
  
  def self.all_names_areas_continents
    countries_areas_continents_array = []
    all_names.map do |country|
        place = Location.new
        place.name = country
        place.scrape_data
        country_data = place.build_clues
        country_area_hash = {name: country, area: country_data["6"], continent: country_data["5"]}
        countries_areas_continents_array << country_area_hash
    end
    countries_areas_continents_array
  end

  def self.all_names_with_areas_and_continents
    @country_names_areas_continents.map do |hash|
        {:name => hash[:name], :area => hash[:area].gsub(',',''), :continent => hash[:continent]} unless hash[:area].include?("None")
    end.compact
  end

  def self.all_names_by_area
    all_names_with_areas_and_continents.sort_by do |hash|
        hash[:area].to_i
    end.reverse
  end


  def self.best_known_countries
    ["Russia","Antarctica","Canada","China","United States","Brazil","Australia","India","Mexico","Italy","Japan","Egypt","France","Germany","Norway","New Zealand","United Kingdom","Ireland","Switzerland","Jamaica","Israel","Spain","Sweden"]
  end

  def self.choose_random_easy_country
    all_names_with_areas_and_continents.map do |hash|
        hash if best_known_countries.include?(hash[:name])
    end.compact.sample[:name]
  end

  def self.choose_random_medium_country
    all_names_with_areas_and_continents.map do |hash|
        hash if hash[:area].to_i > 300000 && hash[:continent] != "Africa" && !best_known_countries.include?(hash[:name])
    end.compact.sample[:name]
  end

  def self.choose_random_hard_country
    all_names_with_areas_and_continents.map do |hash|
        hash if hash[:area].to_i < 3000000
    end.compact.sample[:name]
  end

  def self.choose_random_really_hard_country
    all_names_with_areas_and_continents.map do |hash|
        hash if hash[:area].to_i < 1000
    end.compact.sample[:name]
  end

  @country_names_areas_continents = [
    {:name => "Afghanistan", :area => "647,500 km2", :continent => "Asia"},
    {:name => "Aland Islands", :area => "None km2", :continent => "Europe"},
    {:name => "Albania", :area => "28,748 km2", :continent => "Europe"},
    {:name => "Algeria", :area => "2,381,740 km2", :continent => "Africa"},
    {:name => "American Samoa", :area => "199 km2", :continent => "Oceania"},
    {:name => "Andorra", :area => "468 km2", :continent => "Europe"},
    {:name => "Angola", :area => "1,246,700 km2", :continent => "Africa"},
    {:name => "Anguilla", :area => "102 km2", :continent => "North America"},
    {:name => "Antarctica", :area => "14,000,000 km2", :continent => "Antarctica"},
    {:name => "Antigua and Barbuda", :area => "443 km2", :continent => "North America"},
    {:name => "Argentina", :area => "2,766,890 km2", :continent => "South America"},
    {:name => "Armenia", :area => "29,800 km2", :continent => "Asia"},
    {:name => "Aruba", :area => "193 km2", :continent => "North America"},
    {:name => "Australia", :area => "7,686,850 km2", :continent => "Oceania"},
    {:name => "Austria", :area => "83,858 km2", :continent => "Europe"},
    {:name => "Azerbaijan", :area => "86,600 km2", :continent => "Asia"},
    {:name => "Bahamas", :area => "13,940 km2", :continent => "North America"},
    {:name => "Bahrain", :area => "665 km2", :continent => "Asia"},
    {:name => "Bangladesh", :area => "144,000 km2", :continent => "Asia"},
    {:name => "Barbados", :area => "431 km2", :continent => "North America"},
    {:name => "Belarus", :area => "207,600 km2", :continent => "Europe"},
    {:name => "Belgium", :area => "30,510 km2", :continent => "Europe"},
    {:name => "Belize", :area => "22,966 km2", :continent => "North America"},
    {:name => "Benin", :area => "112,620 km2", :continent => "Africa"},
    {:name => "Bermuda", :area => "53 km2", :continent => "North America"},
    {:name => "Bhutan", :area => "47,000 km2", :continent => "Asia"},
    {:name => "Bolivia", :area => "1,098,580 km2", :continent => "South America"},
    {:name => "Bosnia and Herzegovina", :area => "51,129 km2", :continent => "Europe"},
    {:name => "Botswana", :area => "600,370 km2", :continent => "Africa"},
    {:name => "Bouvet Island", :area => "None km2", :continent => "Antarctica"},
    {:name => "Brazil", :area => "8,511,965 km2", :continent => "South America"},
    {:name => "British Indian Ocean Territory", :area => "60 km2", :continent => "Asia"},
    {:name => "British Virgin Islands", :area => "153 km2", :continent => "North America"},
    {:name => "Brunei", :area => "5,770 km2", :continent => "Asia"},
    {:name => "Bulgaria", :area => "110,910 km2", :continent => "Europe"},
    {:name => "Burkina Faso", :area => "274,200 km2", :continent => "Africa"},
    {:name => "Burundi", :area => "27,830 km2", :continent => "Africa"},
    {:name => "Cambodia", :area => "181,040 km2", :continent => "Asia"},
    {:name => "Cameroon", :area => "475,440 km2", :continent => "Africa"},
    {:name => "Canada", :area => "9,984,670 km2", :continent => "North America"},
    {:name => "Cape Verde", :area => "4,033 km2", :continent => "Africa"},
    {:name => "Cayman Islands", :area => "262 km2", :continent => "North America"},
    {:name => "Central African Republic", :area => "622,984 km2", :continent => "Africa"},
    {:name => "Chad", :area => "1,284,000 km2", :continent => "Africa"},
    {:name => "Chile", :area => "756,950 km2", :continent => "South America"},
    {:name => "China", :area => "9,596,960 km2", :continent => "Asia"},
    {:name => "Christmas Island", :area => "135 km2", :continent => "Asia"},
    {:name => "Cocos Islands", :area => "14 km2", :continent => "Asia"},
    {:name => "Colombia", :area => "1,138,910 km2", :continent => "South America"},
    {:name => "Comoros", :area => "2,170 km2", :continent => "Africa"},
    {:name => "Cook Islands", :area => "240 km2", :continent => "Oceania"},
    {:name => "Costa Rica", :area => "51,100 km2", :continent => "North America"},
    {:name => "Croatia", :area => "56,542 km2", :continent => "Europe"},
    {:name => "Cuba", :area => "110,860 km2", :continent => "North America"},
    {:name => "Curacao", :area => "None km2", :continent => "North America"},
    {:name => "Cyprus", :area => "9,250 km2", :continent => "Europe"},
    {:name => "Czech Republic", :area => "78,866 km2", :continent => "Europe"},
    {:name => "Denmark", :area => "43,094 km2", :continent => "Europe"},
    {:name => "Djibouti", :area => "23,000 km2", :continent => "Africa"},
    {:name => "Dominica", :area => "754 km2", :continent => "North America"},
    {:name => "Dominican Republic", :area => "48,730 km2", :continent => "North America"},
    {:name => "Ecuador", :area => "283,560 km2", :continent => "South America"},
    {:name => "Egypt", :area => "1,001,450 km2", :continent => "Africa"},
    {:name => "El Salvador", :area => "21,040 km2", :continent => "North America"},
    {:name => "Equatorial Guinea", :area => "28,051 km2", :continent => "Africa"},
    {:name => "Eritrea", :area => "121,320 km2", :continent => "Africa"},
    {:name => "Estonia", :area => "45,226 km2", :continent => "Europe"},
    {:name => "Ethiopia", :area => "1,127,127 km2", :continent => "Africa"},
    {:name => "Falkland Islands", :area => "12,173 km2", :continent => "South America"},
    {:name => "Faroe Islands", :area => "1,399 km2", :continent => "Europe"},
    {:name => "Fiji", :area => "18,270 km2", :continent => "Oceania"},
    {:name => "Finland", :area => "337,030 km2", :continent => "Europe"},
    {:name => "France", :area => "547,030 km2", :continent => "Europe"},
    {:name => "French Guiana", :area => "91,000 km2", :continent => "South America"},
    {:name => "French Polynesia", :area => "4,167 km2", :continent => "Oceania"},
    {:name => "French Southern Territories", :area => "7,829 km2", :continent => "Antarctica"},
    {:name => "Gabon", :area => "267,667 km2", :continent => "Africa"},
    {:name => "Gambia", :area => "11,300 km2", :continent => "Africa"},
    {:name => "Georgia", :area => "69,700 km2", :continent => "Asia"},
    {:name => "Germany", :area => "357,021 km2", :continent => "Europe"},
    {:name => "Ghana", :area => "239,460 km2", :continent => "Africa"},
    {:name => "Gibraltar", :area => "6 km2", :continent => "Europe"},
    {:name => "Greece", :area => "131,940 km2", :continent => "Europe"},
    {:name => "Greenland", :area => "2,166,086 km2", :continent => "North America"},
    {:name => "Grenada", :area => "344 km2", :continent => "North America"},
    {:name => "Guadeloupe", :area => "1,780 km2", :continent => "North America"},
    {:name => "Guam", :area => "549 km2", :continent => "Oceania"},
    {:name => "Guatemala", :area => "108,890 km2", :continent => "North America"},
    {:name => "Guernsey", :area => "78 km2", :continent => "Europe"},
    {:name => "Guinea", :area => "245,857 km2", :continent => "Africa"},
    {:name => "Guinea-Bissau", :area => "36,120 km2", :continent => "Africa"},
    {:name => "Guyana", :area => "214,970 km2", :continent => "South America"},
    {:name => "Haiti", :area => "27,750 km2", :continent => "North America"},
    {:name => "Honduras", :area => "112,090 km2", :continent => "North America"},
    {:name => "Hong Kong", :area => "1,092 km2", :continent => "Asia"},
    {:name => "Hungary", :area => "93,030 km2", :continent => "Europe"},
    {:name => "Iceland", :area => "103,000 km2", :continent => "Europe"},
    {:name => "India", :area => "3,287,590 km2", :continent => "Asia"},
    {:name => "Indonesia", :area => "1,919,440 km2", :continent => "Asia"},
    {:name => "Iran", :area => "1,648,000 km2", :continent => "Asia"},
    {:name => "Iraq", :area => "437,072 km2", :continent => "Asia"},
    {:name => "Ireland", :area => "70,280 km2", :continent => "Europe"},
    {:name => "Isle of Man", :area => "572 km2", :continent => "Europe"},
    {:name => "Israel", :area => "20,770 km2", :continent => "Asia"},
    {:name => "Italy", :area => "301,230 km2", :continent => "Europe"},
    {:name => "Ivory Coast", :area => "322,460 km2", :continent => "Africa"},
    {:name => "Jamaica", :area => "10,991 km2", :continent => "North America"},
    {:name => "Japan", :area => "377,835 km2", :continent => "Asia"},
    {:name => "Jersey", :area => "116 km2", :continent => "Europe"},
    {:name => "Jordan", :area => "92,300 km2", :continent => "Asia"},
    {:name => "Kazakhstan", :area => "2,717,300 km2", :continent => "Asia"},
    {:name => "Kenya", :area => "582,650 km2", :continent => "Africa"},
    {:name => "Kiribati", :area => "811 km2", :continent => "Oceania"},
    {:name => "Kuwait", :area => "17,820 km2", :continent => "Asia"},
    {:name => "Kyrgyzstan", :area => "198,500 km2", :continent => "Asia"},
    {:name => "Laos", :area => "236,800 km2", :continent => "Asia"},
    {:name => "Latvia", :area => "64,589 km2", :continent => "Europe"},
    {:name => "Lebanon", :area => "10,400 km2", :continent => "Asia"},
    {:name => "Lesotho", :area => "30,355 km2", :continent => "Africa"},
    {:name => "Liberia", :area => "111,370 km2", :continent => "Africa"},
    {:name => "Libya", :area => "1,759,540 km2", :continent => "Africa"},
    {:name => "Liechtenstein", :area => "160 km2", :continent => "Europe"},
    {:name => "Lithuania", :area => "65,200 km2", :continent => "Europe"},
    {:name => "Luxembourg", :area => "2,586 km2", :continent => "Europe"},
    {:name => "Macao", :area => "254 km2", :continent => "Asia"},
    {:name => "Macedonia", :area => "25,333 km2", :continent => "Europe"},
    {:name => "Madagascar", :area => "587,040 km2", :continent => "Africa"},
    {:name => "Malawi", :area => "118,480 km2", :continent => "Africa"},
    {:name => "Malaysia", :area => "329,750 km2", :continent => "Asia"},
    {:name => "Maldives", :area => "300 km2", :continent => "Asia"},
    {:name => "Mali", :area => "1,240,000 km2", :continent => "Africa"},
    {:name => "Malta", :area => "316 km2", :continent => "Europe"},
    {:name => "Marshall Islands", :area => "181 km2", :continent => "Oceania"},
    {:name => "Martinique", :area => "1,100 km2", :continent => "North America"},
    {:name => "Mauritania", :area => "1,030,700 km2", :continent => "Africa"},
    {:name => "Mauritius", :area => "2,040 km2", :continent => "Africa"},
    {:name => "Mayotte", :area => "374 km2", :continent => "Africa"},
    {:name => "Mexico", :area => "1,972,550 km2", :continent => "North America"},
    {:name => "Micronesia", :area => "702 km2", :continent => "Oceania"},
    {:name => "Moldova", :area => "33,843 km2", :continent => "Europe"},
    {:name => "Monaco", :area => "1 km2", :continent => "Europe"},
    {:name => "Mongolia", :area => "1,565,000 km2", :continent => "Asia"},
    {:name => "Montenegro", :area => "14,026 km2", :continent => "Europe"},
    {:name => "Montserrat", :area => "102 km2", :continent => "North America"},
    {:name => "Morocco", :area => "446,550 km2", :continent => "Africa"},
    {:name => "Mozambique", :area => "801,590 km2", :continent => "Africa"},
    {:name => "Myanmar", :area => "678,500 km2", :continent => "Asia"},
    {:name => "Namibia", :area => "825,418 km2", :continent => "Africa"},
    {:name => "Nauru", :area => "21 km2", :continent => "Oceania"},
    {:name => "Nepal", :area => "140,800 km2", :continent => "Asia"},
    {:name => "Netherlands", :area => "41,526 km2", :continent => "Europe"},
    {:name => "New Caledonia", :area => "19,060 km2", :continent => "Oceania"},
    {:name => "New Zealand", :area => "268,680 km2", :continent => "Oceania"},
    {:name => "Nicaragua", :area => "129,494 km2", :continent => "North America"},
    {:name => "Niger", :area => "1,267,000 km2", :continent => "Africa"},
    {:name => "Nigeria", :area => "923,768 km2", :continent => "Africa"},
    {:name => "Niue", :area => "260 km2", :continent => "Oceania"},
    {:name => "Norfolk Island", :area => "34 km2", :continent => "Oceania"},
    {:name => "North Korea", :area => "120,540 km2", :continent => "Asia"},
    {:name => "Northern Mariana Islands", :area => "477 km2", :continent => "Oceania"},
    {:name => "Norway", :area => "324,220 km2", :continent => "Europe"},
    {:name => "Oman", :area => "212,460 km2", :continent => "Asia"},
    {:name => "Pakistan", :area => "803,940 km2", :continent => "Asia"},
    {:name => "Palau", :area => "458 km2", :continent => "Oceania"},
    {:name => "Panama", :area => "78,200 km2", :continent => "North America"},
    {:name => "Papua New Guinea", :area => "462,840 km2", :continent => "Oceania"},
    {:name => "Paraguay", :area => "406,750 km2", :continent => "South America"},
    {:name => "Peru", :area => "1,285,220 km2", :continent => "South America"},
    {:name => "Philippines", :area => "300,000 km2", :continent => "Asia"},
    {:name => "Pitcairn", :area => "47 km2", :continent => "Oceania"},
    {:name => "Poland", :area => "312,685 km2", :continent => "Europe"},
    {:name => "Portugal", :area => "92,391 km2", :continent => "Europe"},
    {:name => "Puerto Rico", :area => "9,104 km2", :continent => "North America"},
    {:name => "Qatar", :area => "11,437 km2", :continent => "Asia"},
    {:name => "Republic of the Congo", :area => "342,000 km2", :continent => "Africa"},
    {:name => "Reunion", :area => "2,517 km2", :continent => "Africa"},
    {:name => "Romania", :area => "237,500 km2", :continent => "Europe"},
    {:name => "Russia", :area => "17,100,000 km2", :continent => "Europe"},
    {:name => "Rwanda", :area => "26,338 km2", :continent => "Africa"},
    {:name => "Saint Helena", :area => "410 km2", :continent => "Africa"},
    {:name => "Saint Kitts and Nevis", :area => "261 km2", :continent => "North America"},
    {:name => "Saint Lucia", :area => "616 km2", :continent => "North America"},
    {:name => "Saint Martin", :area => "53 km2", :continent => "North America"},
    {:name => "Saint Pierre and Miquelon", :area => "242 km2", :continent => "North America"},
    {:name => "Saint Vincent and the Grenadines", :area => "389 km2", :continent => "North America"},
    {:name => "Samoa", :area => "2,944 km2", :continent => "Oceania"},
    {:name => "San Marino", :area => "61 km2", :continent => "Europe"},
    {:name => "Sao Tome and Principe", :area => "1,001 km2", :continent => "Africa"},
    {:name => "Saudi Arabia", :area => "1,960,582 km2", :continent => "Asia"},
    {:name => "Senegal", :area => "196,190 km2", :continent => "Africa"},
    {:name => "Serbia", :area => "88,361 km2", :continent => "Europe"},
    {:name => "Seychelles", :area => "455 km2", :continent => "Africa"},
    {:name => "Sierra Leone", :area => "71,740 km2", :continent => "Africa"},
    {:name => "Singapore", :area => "692 km2", :continent => "Asia"},
    {:name => "Slovakia", :area => "48,845 km2", :continent => "Europe"},
    {:name => "Slovenia", :area => "20,273 km2", :continent => "Europe"},
    {:name => "Solomon Islands", :area => "28,450 km2", :continent => "Oceania"},
    {:name => "Somalia", :area => "637,657 km2", :continent => "Africa"},
    {:name => "South Africa", :area => "1,219,912 km2", :continent => "Africa"},
    {:name => "South Korea", :area => "98,480 km2", :continent => "Asia"},
    {:name => "South Sudan", :area => "644,329 km2", :continent => "Africa"},
    {:name => "South Georgia and the South Sandwich Islands", :area => "3,903 km2", :continent => "Antarctica"},
    {:name => "Spain", :area => "504,782 km2", :continent => "Europe"},
    {:name => "Sri Lanka", :area => "65,610 km2", :continent => "Asia"},
    {:name => "Sudan", :area => "1,861,484 km2", :continent => "Africa"},
    {:name => "Suriname", :area => "163,270 km2", :continent => "South America"},
    {:name => "Svalbard and Jan Mayen", :area => "62,049 km2", :continent => "Europe"},
    {:name => "Swaziland", :area => "17,363 km2", :continent => "Africa"},
    {:name => "Sweden", :area => "449,964 km2", :continent => "Europe"},
    {:name => "Switzerland", :area => "41,290 km2", :continent => "Europe"},
    {:name => "Syria", :area => "185,180 km2", :continent => "Asia"},
    {:name => "Taiwan", :area => "35,980 km2", :continent => "Asia"},
    {:name => "Tajikistan", :area => "143,100 km2", :continent => "Asia"},
    {:name => "Tanzania", :area => "945,087 km2", :continent => "Africa"},
    {:name => "Thailand", :area => "514,000 km2", :continent => "Asia"},
    {:name => "Togo", :area => "56,785 km2", :continent => "Africa"},
    {:name => "Tokelau", :area => "10 km2", :continent => "Oceania"},
    {:name => "Tonga", :area => "748 km2", :continent => "Oceania"},
    {:name => "Trinidad and Tobago", :area => "5,128 km2", :continent => "North America"},
    {:name => "Tunisia", :area => "163,610 km2", :continent => "Africa"},
    {:name => "Turkey", :area => "780,580 km2", :continent => "Asia"},
    {:name => "Turkmenistan", :area => "488,100 km2", :continent => "Asia"},
    {:name => "Turks and Caicos Islands", :area => "430 km2", :continent => "North America"},
    {:name => "Tuvalu", :area => "26 km2", :continent => "Oceania"},
    {:name => "Uganda", :area => "236,040 km2", :continent => "Africa"},
    {:name => "Ukraine", :area => "603,700 km2", :continent => "Europe"},
    {:name => "United Arab Emirates", :area => "82,880 km2", :continent => "Asia"},
    {:name => "United Kingdom", :area => "244,820 km2", :continent => "Europe"},
    {:name => "United States", :area => "9,629,091 km2", :continent => "North America"},
    {:name => "United States Minor Outlying Islands", :area => "0 km2", :continent => "Oceania"},
    {:name => "Uruguay", :area => "176,220 km2", :continent => "South America"},
    {:name => "Uzbekistan", :area => "447,400 km2", :continent => "Asia"},
    {:name => "Vanuatu", :area => "12,200 km2", :continent => "Oceania"},
    {:name => "Venezuela", :area => "912,050 km2", :continent => "South America"},
    {:name => "Vietnam", :area => "329,560 km2", :continent => "Asia"},
    {:name => "US Virgin Islands", :area => "352 km2", :continent => "North America"},
    {:name => "Wallis and Futuna", :area => "274 km2", :continent => "Oceania"},
    {:name => "Western Sahara", :area => "266,000 km2", :continent => "Africa"},
    {:name => "Yemen", :area => "527,970 km2", :continent => "Asia"},
    {:name => "Zambia", :area => "752,614 km2", :continent => "Africa"},
    {:name => "Zimbabwe", :area => "390,580 km2", :continent => "Africa"}
    ]
end
