import _ from 'lodash'

import Head from 'next/head'


import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import { EventsBar } from "../../../ui/site/eventsbar"
import { Header } from '../../../ui/site/header'
import { FHS_AFRICA as header } from '../../../fixtures/nav'
import { Footer } from '../../../fuselage/theme/2025/africa/common/footer/footer'

import { PartnerCategoryGrid, PartnerCategory, PartnerLogoGrid, PartnerLogo } from '../../../fuselage/theme/2024/sa/components/partner-logo/partner-logo'




const LEGACY_PARTNER_DATA = {
    "event": {
        "fieldDefinitions": [
            {},
            {},
            {},
            {
                "id": "RmllbGREZWZpbml0aW9uXzgyNzM3NQ==",
                "name": "Country",
                "optionsValues": [
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM2Mg==",
                        "value": "AD",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Andorra"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM2Mw==",
                        "value": "AE",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "United Arab Emirates"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM2NA==",
                        "value": "AF",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Afghanistan"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM2NQ==",
                        "value": "AG",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Antigua & Barbuda"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM2Ng==",
                        "value": "AI",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Anguilla"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM2Nw==",
                        "value": "AL",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Albania"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM2OA==",
                        "value": "AM",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Armenia"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM2OQ==",
                        "value": "AO",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Angola"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM3MA==",
                        "value": "AQ",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Antarctica"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM3MQ==",
                        "value": "AR",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Argentina"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM3Mg==",
                        "value": "AS",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "American Samoa"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM3Mw==",
                        "value": "AT",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Austria"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM3NA==",
                        "value": "AU",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Australia"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM3NQ==",
                        "value": "AW",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Aruba"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM3Ng==",
                        "value": "AX",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Åland Islands"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM3Nw==",
                        "value": "AZ",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Azerbaijan"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM3OA==",
                        "value": "BA",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Bosnia & Herzegovina"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM3OQ==",
                        "value": "BB",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Barbados"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM4MA==",
                        "value": "BD",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Bangladesh"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM4MQ==",
                        "value": "BE",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Belgium"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM4Mg==",
                        "value": "BF",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Burkina Faso"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM4Mw==",
                        "value": "BG",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Bulgaria"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM4NA==",
                        "value": "BH",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Bahrain"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM4NQ==",
                        "value": "BI",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Burundi"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM4Ng==",
                        "value": "BJ",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Benin"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM4Nw==",
                        "value": "BL",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "St. Barthélemy"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM4OA==",
                        "value": "BM",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Bermuda"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM4OQ==",
                        "value": "BN",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Brunei"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM5MA==",
                        "value": "BO",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Bolivia"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM5MQ==",
                        "value": "BQ",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Caribbean Netherlands"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM5Mg==",
                        "value": "BR",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Brazil"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM5Mw==",
                        "value": "BS",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Bahamas"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM5NA==",
                        "value": "BT",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Bhutan"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM5NQ==",
                        "value": "BV",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Bouvet Island"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM5Ng==",
                        "value": "BW",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Botswana"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM5Nw==",
                        "value": "BY",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Belarus"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM5OA==",
                        "value": "BZ",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Belize"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDM5OQ==",
                        "value": "CA",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Canada"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQwMA==",
                        "value": "CC",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Cocos (Keeling) Islands"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQwMQ==",
                        "value": "CD",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Congo - Kinshasa"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQwMg==",
                        "value": "CF",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Central African Republic"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQwMw==",
                        "value": "CG",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Congo - Brazzaville"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQwNA==",
                        "value": "CH",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Switzerland"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQwNQ==",
                        "value": "CI",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Côte d’Ivoire"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQwNg==",
                        "value": "CK",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Cook Islands"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQwNw==",
                        "value": "CL",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Chile"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQwOA==",
                        "value": "CM",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Cameroon"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQwOQ==",
                        "value": "CN",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "China"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQxMA==",
                        "value": "CO",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Colombia"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQxMQ==",
                        "value": "CR",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Costa Rica"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQxMg==",
                        "value": "CU",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Cuba"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQxMw==",
                        "value": "CV",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Cape Verde"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQxNA==",
                        "value": "CW",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Curaçao"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQxNQ==",
                        "value": "CX",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Christmas Island"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQxNg==",
                        "value": "CY",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Cyprus"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQxNw==",
                        "value": "CZ",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Czechia"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQxOA==",
                        "value": "DE",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Germany"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQxOQ==",
                        "value": "DJ",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Djibouti"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQyMA==",
                        "value": "DK",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Denmark"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQyMQ==",
                        "value": "DM",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Dominica"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQyMg==",
                        "value": "DO",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Dominican Republic"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQyMw==",
                        "value": "DZ",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Algeria"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQyNA==",
                        "value": "EC",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Ecuador"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQyNQ==",
                        "value": "EE",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Estonia"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQyNg==",
                        "value": "EG",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Egypt"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQyNw==",
                        "value": "EH",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Western Sahara"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQyOA==",
                        "value": "ER",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Eritrea"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQyOQ==",
                        "value": "ES",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Spain"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQzMA==",
                        "value": "ET",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Ethiopia"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQzMQ==",
                        "value": "FI",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Finland"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQzMg==",
                        "value": "FJ",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Fiji"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQzMw==",
                        "value": "FK",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Falkland Islands (Islas Malvinas)"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQzNA==",
                        "value": "FM",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Micronesia"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQzNQ==",
                        "value": "FO",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Faroe Islands"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQzNg==",
                        "value": "FR",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "France"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQzNw==",
                        "value": "GA",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Gabon"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQzOA==",
                        "value": "GB",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "United Kingdom"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQzOQ==",
                        "value": "GD",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Grenada"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ0MA==",
                        "value": "GE",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Georgia"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ0MQ==",
                        "value": "GF",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "French Guiana"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ0Mg==",
                        "value": "GG",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Guernsey"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ0Mw==",
                        "value": "GH",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Ghana"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ0NA==",
                        "value": "GI",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Gibraltar"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ0NQ==",
                        "value": "GL",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Greenland"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ0Ng==",
                        "value": "GM",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Gambia"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ0Nw==",
                        "value": "GN",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Guinea"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ0OA==",
                        "value": "GP",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Guadeloupe"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ0OQ==",
                        "value": "GQ",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Equatorial Guinea"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ1MA==",
                        "value": "GR",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Greece"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ1MQ==",
                        "value": "GS",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "South Georgia & South Sandwich Islands"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ1Mg==",
                        "value": "GT",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Guatemala"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ1Mw==",
                        "value": "GU",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Guam"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ1NA==",
                        "value": "GW",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Guinea-Bissau"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ1NQ==",
                        "value": "GY",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Guyana"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ1Ng==",
                        "value": "HK",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Hong Kong"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ1Nw==",
                        "value": "HM",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Heard & McDonald Islands"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ1OA==",
                        "value": "HN",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Honduras"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ1OQ==",
                        "value": "HR",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Croatia"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ2MA==",
                        "value": "HT",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Haiti"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ2MQ==",
                        "value": "HU",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Hungary"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ2Mg==",
                        "value": "ID",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Indonesia"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ2Mw==",
                        "value": "IE",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Ireland"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ2NA==",
                        "value": "IL",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Israel"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ2NQ==",
                        "value": "IM",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Isle of Man"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ2Ng==",
                        "value": "IN",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "India"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ2Nw==",
                        "value": "IO",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "British Indian Ocean Territory"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ2OA==",
                        "value": "IQ",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Iraq"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ2OQ==",
                        "value": "IR",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Iran"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ3MA==",
                        "value": "IS",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Iceland"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ3MQ==",
                        "value": "IT",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Italy"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ3Mg==",
                        "value": "JE",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Jersey"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ3Mw==",
                        "value": "JM",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Jamaica"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ3NA==",
                        "value": "JO",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Jordan"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ3NQ==",
                        "value": "JP",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Japan"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ3Ng==",
                        "value": "KE",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Kenya"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ3Nw==",
                        "value": "KG",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Kyrgyzstan"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ3OA==",
                        "value": "KH",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Cambodia"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ3OQ==",
                        "value": "KI",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Kiribati"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ4MA==",
                        "value": "KM",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Comoros"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ4MQ==",
                        "value": "KN",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "St. Kitts & Nevis"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ4Mg==",
                        "value": "KP",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "North Korea"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ4Mw==",
                        "value": "KR",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "South Korea"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ4NA==",
                        "value": "KW",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Kuwait"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ4NQ==",
                        "value": "KY",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Cayman Islands"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ4Ng==",
                        "value": "KZ",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Kazakhstan"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ4Nw==",
                        "value": "LA",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Laos"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ4OA==",
                        "value": "LB",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Lebanon"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ4OQ==",
                        "value": "LC",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "St. Lucia"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ5MA==",
                        "value": "LI",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Liechtenstein"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ5MQ==",
                        "value": "LK",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Sri Lanka"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ5Mg==",
                        "value": "LR",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Liberia"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ5Mw==",
                        "value": "LS",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Lesotho"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ5NA==",
                        "value": "LT",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Lithuania"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ5NQ==",
                        "value": "LU",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Luxembourg"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ5Ng==",
                        "value": "LV",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Latvia"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ5Nw==",
                        "value": "LY",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Libya"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ5OA==",
                        "value": "MA",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Morocco"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDQ5OQ==",
                        "value": "MC",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Monaco"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUwMA==",
                        "value": "MD",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Moldova"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUwMQ==",
                        "value": "ME",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Montenegro"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUwMg==",
                        "value": "MF",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "St. Martin"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUwMw==",
                        "value": "MG",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Madagascar"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUwNA==",
                        "value": "MH",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Marshall Islands"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUwNQ==",
                        "value": "MK",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "North Macedonia"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUwNg==",
                        "value": "ML",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Mali"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUwNw==",
                        "value": "MM",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Myanmar (Burma)"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUwOA==",
                        "value": "MN",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Mongolia"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUwOQ==",
                        "value": "MO",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Macao"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUxMA==",
                        "value": "MP",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Northern Mariana Islands"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUxMQ==",
                        "value": "MQ",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Martinique"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUxMg==",
                        "value": "MR",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Mauritania"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUxMw==",
                        "value": "MS",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Montserrat"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUxNA==",
                        "value": "MT",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Malta"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUxNQ==",
                        "value": "MU",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Mauritius"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUxNg==",
                        "value": "MV",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Maldives"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUxNw==",
                        "value": "MW",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Malawi"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUxOA==",
                        "value": "MX",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Mexico"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUxOQ==",
                        "value": "MY",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Malaysia"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUyMA==",
                        "value": "MZ",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Mozambique"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUyMQ==",
                        "value": "NA",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Namibia"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUyMg==",
                        "value": "NC",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "New Caledonia"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUyMw==",
                        "value": "NE",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Niger"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUyNA==",
                        "value": "NF",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Norfolk Island"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUyNQ==",
                        "value": "NG",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Nigeria"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUyNg==",
                        "value": "NI",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Nicaragua"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUyNw==",
                        "value": "NL",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Netherlands"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUyOA==",
                        "value": "NO",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Norway"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUyOQ==",
                        "value": "NP",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Nepal"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUzMA==",
                        "value": "NR",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Nauru"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUzMQ==",
                        "value": "NU",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Niue"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUzMg==",
                        "value": "NZ",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "New Zealand"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUzMw==",
                        "value": "OM",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Oman"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUzNA==",
                        "value": "PA",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Panama"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUzNQ==",
                        "value": "PE",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Peru"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUzNg==",
                        "value": "PF",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "French Polynesia"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUzNw==",
                        "value": "PG",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Papua New Guinea"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUzOA==",
                        "value": "PH",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Philippines"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDUzOQ==",
                        "value": "PK",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Pakistan"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU0MA==",
                        "value": "PL",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Poland"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU0MQ==",
                        "value": "PM",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "St. Pierre & Miquelon"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU0Mg==",
                        "value": "PN",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Pitcairn Islands"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU0Mw==",
                        "value": "PR",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Puerto Rico"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU0NA==",
                        "value": "PS",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Palestine"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU0NQ==",
                        "value": "PT",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Portugal"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU0Ng==",
                        "value": "PW",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Palau"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU0Nw==",
                        "value": "PY",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Paraguay"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU0OA==",
                        "value": "QA",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Qatar"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU0OQ==",
                        "value": "RE",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Réunion"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU1MA==",
                        "value": "RO",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Romania"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU1MQ==",
                        "value": "RS",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Serbia"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU1Mg==",
                        "value": "RU",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Russia"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU1Mw==",
                        "value": "RW",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Rwanda"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU1NA==",
                        "value": "SA",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Saudi Arabia"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU1NQ==",
                        "value": "SB",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Solomon Islands"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU1Ng==",
                        "value": "SC",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Seychelles"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU1Nw==",
                        "value": "SD",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Sudan"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU1OA==",
                        "value": "SE",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Sweden"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU1OQ==",
                        "value": "SG",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Singapore"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU2MA==",
                        "value": "SH",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "St. Helena"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU2MQ==",
                        "value": "SI",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Slovenia"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU2Mg==",
                        "value": "SJ",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Svalbard & Jan Mayen"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU2Mw==",
                        "value": "SK",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Slovakia"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU2NA==",
                        "value": "SL",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Sierra Leone"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU2NQ==",
                        "value": "SM",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "San Marino"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU2Ng==",
                        "value": "SN",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Senegal"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU2Nw==",
                        "value": "SO",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Somalia"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU2OA==",
                        "value": "SR",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Suriname"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU2OQ==",
                        "value": "SS",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "South Sudan"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU3MA==",
                        "value": "ST",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "São Tomé & Príncipe"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU3MQ==",
                        "value": "SV",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "El Salvador"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU3Mg==",
                        "value": "SX",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Sint Maarten"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU3Mw==",
                        "value": "SY",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Syria"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU3NA==",
                        "value": "SZ",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Eswatini"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU3NQ==",
                        "value": "TC",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Turks & Caicos Islands"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU3Ng==",
                        "value": "TD",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Chad"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU3Nw==",
                        "value": "TF",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "French Southern Territories"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU3OA==",
                        "value": "TG",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Togo"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU3OQ==",
                        "value": "TH",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Thailand"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU4MA==",
                        "value": "TJ",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Tajikistan"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU4MQ==",
                        "value": "TK",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Tokelau"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU4Mg==",
                        "value": "TL",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Timor-Leste"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU4Mw==",
                        "value": "TM",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Turkmenistan"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU4NA==",
                        "value": "TN",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Tunisia"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU4NQ==",
                        "value": "TO",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Tonga"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU4Ng==",
                        "value": "TR",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Türkiye"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU4Nw==",
                        "value": "TT",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Trinidad & Tobago"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU4OA==",
                        "value": "TV",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Tuvalu"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU4OQ==",
                        "value": "TW",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Taiwan"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU5MA==",
                        "value": "TZ",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Tanzania"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU5MQ==",
                        "value": "UA",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Ukraine"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU5Mg==",
                        "value": "UG",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Uganda"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU5Mw==",
                        "value": "UM",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "U.S. Outlying Islands"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU5NA==",
                        "value": "US",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "United States"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU5NQ==",
                        "value": "UY",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Uruguay"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU5Ng==",
                        "value": "UZ",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Uzbekistan"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU5Nw==",
                        "value": "VA",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Vatican City"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU5OA==",
                        "value": "VC",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "St. Vincent & Grenadines"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDU5OQ==",
                        "value": "VE",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Venezuela"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDYwMA==",
                        "value": "VG",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "British Virgin Islands"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDYwMQ==",
                        "value": "VI",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "U.S. Virgin Islands"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDYwMg==",
                        "value": "VN",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Vietnam"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDYwMw==",
                        "value": "VU",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Vanuatu"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDYwNA==",
                        "value": "WF",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Wallis & Futuna"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDYwNQ==",
                        "value": "WS",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Samoa"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDYwNg==",
                        "value": "XK",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Kosovo"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDYwNw==",
                        "value": "YE",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Yemen"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDYwOA==",
                        "value": "YT",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Mayotte"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDYwOQ==",
                        "value": "ZA",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "South Africa"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDYxMA==",
                        "value": "ZM",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Zambia"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMDYxMQ==",
                        "value": "ZW",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Zimbabwe"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "RmllbGREZWZpbml0aW9uXzgyNzM3Nw==",
                "name": "Primary Business",
                "optionsValues": [
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMTYzOA==",
                        "value": "bank-lender",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Bank/Lender"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMTc4NQ==",
                        "value": "other-please-specify",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Other (Please Specify)"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUyMzAyMw==",
                        "value": "f-and-b-investor-operator",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "F&B Investor / Operator"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUzMTk3MQ==",
                        "value": "tourism-government-official",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Tourism / Government Official"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUzMjM2Ng==",
                        "value": "technology-innovation",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Technology/Innovation"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUzMjQ1Mw==",
                        "value": "hotel-developer-builder",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Hotel Developer/Builder"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUzMjQ2MA==",
                        "value": "consultant-advisor",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Consultant/Advisor"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUzMjU3NA==",
                        "value": "investor-equity-owner",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Investor (Equity) / Owner"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUzMjYwNQ==",
                        "value": "hotel-resort-operator",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Hotel/Resort Operator"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUzMjY0OQ==",
                        "value": "media",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Media"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzUzMjc3Mw==",
                        "value": "organiser",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Organiser"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzU0ODAzMw==",
                        "value": "lawyer",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Lawyer"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzU0ODA0NQ==",
                        "value": "education",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Education"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzU0ODI2Ng==",
                        "value": "supplier",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Supplier"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzU0ODI5NQ==",
                        "value": "architect-designer",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Architect/Designer"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzU0ODI5OQ==",
                        "value": "asset-manager",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Asset Manager"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzU0ODM3MQ==",
                        "value": "real-estate-agent-surveyor",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Real Estate Agent/Surveyor"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzYwNjUxNA==",
                        "value": "student",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Student"
                            }
                        ]
                    }
                ]
            },
            {},
            {
                "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                "name": "Type",
                "optionsValues": [
                    {
                        "id": "RmllbGRWYWx1ZV8yNzA1MjU5OA==",
                        "value": "co-organiser",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Co-Organiser"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzA1MjcyNQ==",
                        "value": "founder-sponsor",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Founder Sponsor"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMjM5NDE1NA==",
                        "value": "strategic-partner",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Strategic Partner"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMzkwMTI2Ng==",
                        "value": "host-partner",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Host Partner"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8xNTAzNDczOQ==",
                        "value": "Host Sponsor",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Host Sponsor"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMjM5NDE1Mg==",
                        "value": "founding-partner",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Founding Partner"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMjM5NDE0OQ==",
                        "value": "enablement-partner",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Enablement Partner"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMTM5MzcxMQ==",
                        "value": "country-pavilion-sponsors",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Country Pavilions"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMzkzMjA4Mw==",
                        "value": "platinum-sponsors",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Platinum Sponsors"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMzk0MjEyNQ==",
                        "value": "pavilion-sponosr",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Pavilion Sponsor"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMDg1NjkwMg==",
                        "value": "emerald-sponsor",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Emerald Sponsors"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8xNTAzNDczMg==",
                        "value": "Gold Sponsor",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Gold Sponsors"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8xNTAzNDcyNw==",
                        "value": "Silver Sponsors",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Silver Sponsors"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMjcxMTI3Ng==",
                        "value": "grif-platinum-sponsor",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "GRIF - Platinum Sponsor"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8xOTE4ODg3OQ==",
                        "value": "grif-exhibitor",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Gold Sponsor - Restaurant Invest"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8xNTAzNDczMQ==",
                        "value": "Strategic Partner",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Data Partner - Restaurant Invest"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMzEwNjg2Mw==",
                        "value": "start-up-exhibitor",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Start-up Exhibitor"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMzA4MTIwMA==",
                        "value": "un-tourism-innovation-sponsor",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "UN Tourism Innovation Sponsor"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8xNTAzNDczNw==",
                        "value": "coffee-sponsor",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Coffee Sponsor"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNDE1NjE5Nw==",
                        "value": "water-station-sponsor",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Water Station Sponsor"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMjQ0MjEzMw==",
                        "value": "after-party-host",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "After Party Host"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMzkxMjA3OQ==",
                        "value": "confectionary-cafe-sponsor",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Confectionary Cafe Sponsor "
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMzkxMjA4MA==",
                        "value": "refreshment-bar-sponsor",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Refreshment Bar Sponsors"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMzk0Mjg1Ng==",
                        "value": "mini-golf-sponsor",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Mini Golf Sponsor "
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMzkxMjA4Mg==",
                        "value": "clinic-sponsor",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Clinic Sponsor"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMzkxMjA4Mw==",
                        "value": "networking-sponsor",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Networking Sponsors"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMzkxMjA4NA==",
                        "value": "official-carriers",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Official Carriers"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8xOTE4ODg3Mg==",
                        "value": "media-partner",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Media Partners"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8xOTE4ODgzNg==",
                        "value": "supporter",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Supporters"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMDc3MjE1MQ==",
                        "value": "culinary-and-concept-tour-partners",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Culinary & Concept Tour Partner"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8xNTAzNDc1NQ==",
                        "value": "Organiser",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Organiser"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzM1MDgyNw==",
                        "value": "headline-sponsor",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Headline Sponsor"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzM1MDg0OA==",
                        "value": "sponsor",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Sponsor"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzM1MTMyNw==",
                        "value": "event-ambassador",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Event Ambassador"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzM1MTQ2Mw==",
                        "value": "supported-by",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Supported By"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzM1MTUxNQ==",
                        "value": "pan-africa-publication-relations-partner",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Pan Africa Publication Relations Partner"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "RmllbGREZWZpbml0aW9uXzMxMzIwOQ==",
                "name": "Type",
                "optionsValues": [
                    {
                        "id": "RmllbGRWYWx1ZV8xNTA2NDc5Ng==",
                        "value": "Host",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Host"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8xNTA2NDc5NQ==",
                        "value": "Judge",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Judge"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8xNTA2NDc5Nw==",
                        "value": "Moderator",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Moderator"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMDg1Njg0MQ==",
                        "value": "speaker",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Speaker"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMjgxMjQ1OQ==",
                        "value": "delegate",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Delegate"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMjk0MjY5Nw==",
                        "value": "investor",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Investor"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMzAxNzg4MA==",
                        "value": "guest",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Guest"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMzE0MTU4MQ==",
                        "value": "sponsor",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Sponsor"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMzE1NTc1Mg==",
                        "value": "exhibitor",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Exhibitor"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMzI1ODA2MA==",
                        "value": "delegate-local",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Delegate (Local)"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMzM3ODkzNg==",
                        "value": "complimentary",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Complimentary"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMzY4NDg4OQ==",
                        "value": "press",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Press"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMzcyNzg0OQ==",
                        "value": "staff",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Staff"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNDA1ODg0OQ==",
                        "value": "media-partner",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Media Partner"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNDA3ODEyMQ==",
                        "value": "student-delegate",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Student Delegate"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNDY1OTg3NQ==",
                        "value": "discounted-delegate",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Discounted Delegate"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNDY1OTg3OA==",
                        "value": "student",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Student"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNDY1OTg3OQ==",
                        "value": "workshop-delegate",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Workshop Delegate"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNDY1OTg4MA==",
                        "value": "delegate-premium",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Delegate Premium"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNDcwMTY2NQ==",
                        "value": "sponsordelegate-premium",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Sponsor;Delegate Premium"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNDcwMTY2Nw==",
                        "value": "moderatorsponsor",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Moderator;Sponsor"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNDcwMTY3Nw==",
                        "value": "speakersponsor",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Speaker;Sponsor"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNDcwMTY4MQ==",
                        "value": "sponsorexhibitor",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Sponsor;Exhibitor"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNDcwMTY4Ng==",
                        "value": "delegatesponsor",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Delegate;Sponsor"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNDcwMTY4Nw==",
                        "value": "guestsponsor",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Guest;Sponsor"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNDcwMTY4OQ==",
                        "value": "speakerstaff",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Speaker;Staff"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNDcwMTY5MQ==",
                        "value": "delegatecomplimentary",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Delegate;Complimentary"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNDcwMTY5Mw==",
                        "value": "speakercomplimentary",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Speaker;Complimentary"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNDcwMTY5Nw==",
                        "value": "moderatorspeaker",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Moderator;Speaker"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNDcwMTcwMQ==",
                        "value": "speakerdelegate-premium",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Speaker;Delegate Premium"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNDcwMTcwNg==",
                        "value": "speakerdelegate",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Speaker;Delegate"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNDcwMTcxMA==",
                        "value": "delegatedelegate-premium",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Delegate;Delegate Premium"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNDcyMTc0OA==",
                        "value": "delegatediscounted-delegate",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Delegate;Discounted Delegate"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzM1OTMzNQ==",
                        "value": "moderatordelegate",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Moderator;Delegate"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzYwMzI5Mw==",
                        "value": "pressmedia-partner",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Press;Media Partner"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzYwNjQ4Mg==",
                        "value": "supporter",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Supporter"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "RmllbGREZWZpbml0aW9uXzMyOTU5Mg==",
                "name": "Type",
                "optionsValues": [
                    {
                        "id": "RmllbGRWYWx1ZV8xNTA4Mzk5Ng==",
                        "value": "Registration",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Registration"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8xNTA4NDAyMw==",
                        "value": "Lunch",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Lunch"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8xNTA4Mzk5OA==",
                        "value": "networking",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Networking"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8xNTA4NDAyMQ==",
                        "value": "Break",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Break"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8xNTA4NDAwOA==",
                        "value": "Workshop",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Workshop"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8xNTA4Mzk5Nw==",
                        "value": "Reception",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Reception"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8xNTA4NDAxMw==",
                        "value": "Panel Discussion",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Panel Discussion"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8xNTA4NDAwMw==",
                        "value": "Keynote Presentation",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Keynote Presentation"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMzMzNjg4MQ==",
                        "value": "discussion-room",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Discussion Room"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "RmllbGREZWZpbml0aW9uXzM2MjM1OA==",
                "name": "Location",
                "optionsValues": [
                    {
                        "id": "RmllbGRWYWx1ZV8xOTEwNTI2NA==",
                        "value": "summit-stage",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Summit Stage"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8xOTEwNTI2NQ==",
                        "value": "future-stage",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Future Stage"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMDYxOTUyNA==",
                        "value": "exhibition-stage",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Exhibition Stage"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8xOTgzMTg2Nw==",
                        "value": "inspiration-workshop-room",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Workshop Room (Murjaan)"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMjQ1NzUyOA==",
                        "value": "workshop-room",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Workshop Room"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMjU3Nzc5NQ==",
                        "value": "yanbu-workshop-room",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Yanbu Breakout Room"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMzQ0NjQwMA==",
                        "value": "al-omsiat-b",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Al Omsiat B"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMjU3ODg2Ng==",
                        "value": "mansard-riyadh-a-radisson-collection-hotel",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Mansard Riyadh, a Radisson Collection Hotel"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMzMyODI4NA==",
                        "value": "main-conference-room",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Main Conference Room"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yMzMyODM1NQ==",
                        "value": "exhibition-hall",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Exhibition Room"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNTg4MzM4MA==",
                        "value": "centre-stage",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Centre Stage"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNTkzNDU1NQ==",
                        "value": "future-hub",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Boma Talks - CTICC"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNTkzNDU1Nw==",
                        "value": "knowledge-hub",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Knowledge Station - First Floor - Elgon 1"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNTkzNDU1OA==",
                        "value": "showcase-hub",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Showcase Den - First Floor - Elgon 3"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNTkzNDU1OQ==",
                        "value": "pioneer-hub",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Pioneer Camp - First Floor - Elgon 2"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNTkzNDU2MA==",
                        "value": "the-forum",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Innovation Lodge"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNTk5MTYyMQ==",
                        "value": "najd-workshop-room-2",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Najd Breakout Room"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNjg3NTk4MA==",
                        "value": "net-positive-solution-labs",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Net Positive Solution Labs - Mezzanine Level, The Westin"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNjk4NTkzMg==",
                        "value": "workshop-room-arena",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Workshop Room (Arena)"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzQyNjgyOA==",
                        "value": "networking-lounge",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Networking Lounge"
                            }
                        ]
                    },
                    {
                        "id": "RmllbGRWYWx1ZV8yNzQyNjgyOQ==",
                        "value": "investor-lounge",
                        "translations": [
                            {
                                "language": "en_US",
                                "value": "Investor Lounge"
                            }
                        ]
                    }
                ]
            },
            {}
        ]
    },
    "exhibitors": [
        {
            "id": "RXhoaWJpdG9yXzIyMDQzMzg=",
            "name": "Accor",
            "logoUrl": "https://static.swapcard.com/public/images/77aea5716a0e41e68a8e21a832d37cc3.jpeg",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yMjM5NDE1NA==",
                    "value": "strategic-partner",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Strategic Partner"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMDQzNDQ=",
            "name": "BWH Hotels",
            "logoUrl": "https://static.swapcard.com/public/images/de9540c86e86474a940a11f435886f74.png",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yMjM5NDE1NA==",
                    "value": "strategic-partner",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Strategic Partner"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMDQzNDU=",
            "name": "Hilton",
            "logoUrl": "https://static.swapcard.com/public/images/4c91c8db835d4dbb84b6250be9792d16.png",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yMjM5NDE1NA==",
                    "value": "strategic-partner",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Strategic Partner"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMDQzNDc=",
            "name": "IHG Hotels & Resorts",
            "logoUrl": "https://static.swapcard.com/public/images/99fb6590970b422ba00652ec1a547a94.png",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yMjM5NDE1NA==",
                    "value": "strategic-partner",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Strategic Partner"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMDQzNTI=",
            "name": "Marriott International",
            "logoUrl": "https://static.swapcard.com/public/images/a1587166d01f44a4ad8ad96230c9a18e.jpeg",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yMjM5NDE1NA==",
                    "value": "strategic-partner",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Strategic Partner"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMDQzNTM=",
            "name": "Radisson Hotel Group",
            "logoUrl": "https://static.swapcard.com/public/images/94dfa95871f4421895e4394a8cfc9d4d.jpeg",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yMjM5NDE1NA==",
                    "value": "strategic-partner",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Strategic Partner"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMDQzNTQ=",
            "name": "ACT",
            "logoUrl": "https://static.swapcard.com/public/images/c2ecd0c4953a4355967c13ce535f5a88.png",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yNzM1MDgyNw==",
                    "value": "headline-sponsor",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Headline Sponsor"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMDQzNTU=",
            "name": "CHIC",
            "logoUrl": "https://static.swapcard.com/public/images/7586dce38b8f4645ba1e6f77c5cf321a.webp",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yNzM1MDgyNw==",
                    "value": "headline-sponsor",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Headline Sponsor"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMDQzNTY=",
            "name": "Hansgrohe",
            "logoUrl": "https://static.swapcard.com/public/images/b647306649f64fe8865de36224d312c6.jpeg",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yNzM1MDgyNw==",
                    "value": "headline-sponsor",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Headline Sponsor"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMDQzNzE=",
            "name": "TUI Hotels & Resorts",
            "logoUrl": "https://static.swapcard.com/public/images/488981d9a75b40698081b75f203ad317.jpeg",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yNzM1MDgyNw==",
                    "value": "headline-sponsor",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Headline Sponsor"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMDQzNzM=",
            "name": "Aleph Hospitality",
            "logoUrl": "https://static.swapcard.com/public/images/51c6dfbbc8bf477f8c886cf9c273a49a.jpeg",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yNzM1MDg0OA==",
                    "value": "sponsor",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Sponsor"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMDQzNzQ=",
            "name": "CityBlue Hotels",
            "logoUrl": "https://static.swapcard.com/public/images/33644e67a0d146918a76046fbfdac631.png",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yNzM1MDg0OA==",
                    "value": "sponsor",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Sponsor"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMDQzNzU=",
            "name": "Equate Africa",
            "logoUrl": "https://static.swapcard.com/public/images/e0b3ef9288e44fe8a20aff77552ed237.png",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yNzM1MDg0OA==",
                    "value": "sponsor",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Sponsor"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMDQzNzY=",
            "name": "KnightFrank",
            "logoUrl": "https://static.swapcard.com/public/images/1f77472649cc42b9a88c497199bc8a09.webp",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yNzM1MDg0OA==",
                    "value": "sponsor",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Sponsor"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMDQzNzc=",
            "name": "JLL",
            "logoUrl": "https://static.swapcard.com/public/images/c367c0db74c944f08253054e92c0a6be.png",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yNzM1MDg0OA==",
                    "value": "sponsor",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Sponsor"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMDQzNzg=",
            "name": "St Helena Island",
            "logoUrl": "https://static.swapcard.com/public/images/054368ef0a784a1ebfe9dcf9147b8305.png",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yNzM1MDg0OA==",
                    "value": "sponsor",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Sponsor"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMDQzNzk=",
            "name": "STR",
            "logoUrl": "https://static.swapcard.com/public/images/af558b1596aa4a0aaf4409fce1d3e93e.png",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yNzM1MDg0OA==",
                    "value": "sponsor",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Sponsor"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMDQzODA=",
            "name": "TIME Hotels",
            "logoUrl": "https://static.swapcard.com/public/images/564c89d5adc94c3b9e9b2d80eed3154e.png",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yNzM1MDg0OA==",
                    "value": "sponsor",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Sponsor"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMDQzODI=",
            "name": "TV5 Monde",
            "logoUrl": "https://static.swapcard.com/public/images/12e3851efd0542d49d36e7d7be80e07a.webp",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yNzM1MDg0OA==",
                    "value": "sponsor",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Sponsor"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMDQzODU=",
            "name": "Valor Hospitality ",
            "logoUrl": "https://static.swapcard.com/public/images/c81b6dfb9eaa45c68c052bec4d081b71.png",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yNzM1MDg0OA==",
                    "value": "sponsor",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Sponsor"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMDQzODc=",
            "name": "Develop Hotels Inc",
            "logoUrl": "https://static.swapcard.com/public/images/e4735bf51e434d18aa31ff9d3b7de2a2.webp",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yNzM1MTMyNw==",
                    "value": "event-ambassador",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Event Ambassador"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMDQzOTI=",
            "name": "Hotel Partners Africa",
            "logoUrl": "https://static.swapcard.com/public/images/49e50b8873c04ed69ed70798045a90b8.webp",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yNzM1MTMyNw==",
                    "value": "event-ambassador",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Event Ambassador"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMDQzOTM=",
            "name": "Voltere By Egis",
            "logoUrl": "https://static.swapcard.com/public/images/ad369c830ee0470097186711d93aa2f2.webp",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yNzM1MTMyNw==",
                    "value": "event-ambassador",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Event Ambassador"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMDQzOTY=",
            "name": "W Hospitality Group",
            "logoUrl": "https://static.swapcard.com/public/images/1758031b789246f1b76c6b0b815bb3d2.webp",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yNzM1MTMyNw==",
                    "value": "event-ambassador",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Event Ambassador"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMDQ0MDk=",
            "name": "South Africa Tourism",
            "logoUrl": "https://static.swapcard.com/public/images/46fcefe5287b4fff94e937f629ae87b8.webp",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yNzM1MTQ2Mw==",
                    "value": "supported-by",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Supported By"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMDQ0MTE=",
            "name": "Discover Airlines",
            "logoUrl": "https://static.swapcard.com/public/images/16aebd6f68924c478250491201454413.png",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yMzkxMjA4NA==",
                    "value": "official-carriers",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Official Carriers"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMDQ0MTI=",
            "name": "Kenya Airways",
            "logoUrl": "https://static.swapcard.com/public/images/ceccbfdbc98b46e0815823d765370e83.png",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yMzkxMjA4NA==",
                    "value": "official-carriers",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Official Carriers"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMDQ0MTM=",
            "name": "APO Group",
            "logoUrl": "https://static.swapcard.com/public/images/ac78d10c64e14ba481e6c95587511383.webp",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yNzM1MTUxNQ==",
                    "value": "pan-africa-publication-relations-partner",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Pan Africa Publication Relations Partner"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMDUzNjg=",
            "name": "Africa Hotel Report",
            "logoUrl": "https://static.swapcard.com/public/images/f4c33547968f41bb833eb024bdc45590.webp",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8xOTE4ODg3Mg==",
                    "value": "media-partner",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Media Partners"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMjEyMjk=",
            "name": "Afritraveller",
            "logoUrl": "https://static.swapcard.com/public/images/207b1cba4d464d7284bf1ff5e6b730d4.jpeg",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8xOTE4ODg3Mg==",
                    "value": "media-partner",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Media Partners"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMjEyMzE=",
            "name": "African Travel Times",
            "logoUrl": "https://static.swapcard.com/public/images/6a99e25fff7c4f72a69afdaf184b2031.jpeg",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8xOTE4ODg3Mg==",
                    "value": "media-partner",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Media Partners"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMjEyMzI=",
            "name": "Breaking Travel News",
            "logoUrl": "https://static.swapcard.com/public/images/eff5feb1f05843fc9ddb84b565805209.png",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8xOTE4ODg3Mg==",
                    "value": "media-partner",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Media Partners"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMjEyMzM=",
            "name": "Go Places Digital",
            "logoUrl": "https://static.swapcard.com/public/images/a6a4b11f6abe481ca236150a2ee80293.png",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8xOTE4ODg3Mg==",
                    "value": "media-partner",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Media Partners"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMjEyMzQ=",
            "name": "Hospitality Tech Africa",
            "logoUrl": "https://static.swapcard.com/public/images/0659770e5f324754aa7b249e200ec6a0.png",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8xOTE4ODg3Mg==",
                    "value": "media-partner",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Media Partners"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMjEyMzY=",
            "name": "Hozpitality",
            "logoUrl": "https://static.swapcard.com/public/images/dd549c7331ce42dda60c23f1c06befbc.png",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8xOTE4ODg3Mg==",
                    "value": "media-partner",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Media Partners"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMjEyNTg=",
            "name": "Travelscope",
            "logoUrl": "https://static.swapcard.com/public/images/095f8e89b75244d4a03f26df870165af.png",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8xOTE4ODg3Mg==",
                    "value": "media-partner",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Media Partners"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMjEzMDI=",
            "name": "Travel & Tour World",
            "logoUrl": "https://static.swapcard.com/public/images/08bcc0ac56bc4b778bde07d6d11267d3.png",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8xOTE4ODg3Mg==",
                    "value": "media-partner",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Media Partners"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMjEzMDM=",
            "name": "Property Wheel",
            "logoUrl": "https://static.swapcard.com/public/images/6285771fc0924b389e90c22a52863443.png",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8xOTE4ODg3Mg==",
                    "value": "media-partner",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Media Partners"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMjEzMDc=",
            "name": "Voyages Afriq",
            "logoUrl": "https://static.swapcard.com/public/images/468518b3fb8f4a52b56983e46f18c90c.png",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8xOTE4ODg3Mg==",
                    "value": "media-partner",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Media Partners"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMjE1NTY=",
            "name": "Millat Group",
            "logoUrl": "https://static.swapcard.com/public/images/330fb4a5908e42aaa4a35b4ce2c74abc.webp",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yNzM1MDg0OA==",
                    "value": "sponsor",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Sponsor"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMjE5NDM=",
            "name": "Cape Chamber of Commerce",
            "logoUrl": "https://static.swapcard.com/public/images/f5963dbf95764df1a120a533356f4c4d.webp",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yNzM1MTQ2Mw==",
                    "value": "supported-by",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Supported By"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMjE5NDU=",
            "name": "FEDHASA",
            "logoUrl": "https://static.swapcard.com/public/images/0b61e9b3b426459cab720db7725f3e4a.png",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yNzM1MTQ2Mw==",
                    "value": "supported-by",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Supported By"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMjE5NDY=",
            "name": "SADC Business Council Tourism Alliance ",
            "logoUrl": "https://static.swapcard.com/public/images/e662a7fb735444558726456f28e6c5df.png",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yNzM1MTQ2Mw==",
                    "value": "supported-by",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Supported By"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMjE5NDc=",
            "name": "TASA",
            "logoUrl": "https://static.swapcard.com/public/images/b5b779e805564255b5e8f5224c92fdc9.jpeg",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yNzM1MTQ2Mw==",
                    "value": "supported-by",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Supported By"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMjE5NDk=",
            "name": "Uganda Hotel Owner's Association ",
            "logoUrl": "https://static.swapcard.com/public/images/b0779b6b11534c5b9c7986ad685b162c.png",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yNzM1MTQ2Mw==",
                    "value": "supported-by",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Supported By"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMjE5NTA=",
            "name": "YPO Hospitality Network",
            "logoUrl": "https://static.swapcard.com/public/images/82454aed376a4181aa51289fa3575eb5.jpeg",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yNzM1MTQ2Mw==",
                    "value": "supported-by",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Supported By"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMjg2MjU=",
            "name": "Tourism & Film",
            "logoUrl": "https://static.swapcard.com/public/images/0127bb9af7924d8b9a058983ed653d9f.jpeg",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yNzM1MDg0OA==",
                    "value": "sponsor",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Sponsor"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMjg2MjY=",
            "name": "Mobelli ",
            "logoUrl": "https://static.swapcard.com/public/images/4c566a430a4b49e697bf40ef6ed96c2c.png",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yNzM1MDg0OA==",
                    "value": "sponsor",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Sponsor"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMjg2Mjc=",
            "name": "Western Cape Government",
            "logoUrl": "https://static.swapcard.com/public/images/143327448dbf4c6b9a4ccbc93cff8718.webp",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yNzM1MDg0OA==",
                    "value": "sponsor",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Sponsor"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMjg2Mjk=",
            "name": "World Bank Group",
            "logoUrl": "https://static.swapcard.com/public/images/d1182df6cfbc415e8579cb73d512b73e.webp",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yNzM1MDg0OA==",
                    "value": "sponsor",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Sponsor"
                        }
                    ]
                }
            ]
        },
        {
            "id": "RXhoaWJpdG9yXzIyMjg5ODk=",
            "name": "Technogym",
            "logoUrl": "https://static.swapcard.com/public/images/e4f86d0c0f7e41a29614b1480c99c6cd.png",
            "fields": [
                {
                    "id": "RmllbGRWYWx1ZV8yNzM1MDg0OA==",
                    "value": "sponsor",
                    "definition": {
                        "id": "RmllbGREZWZpbml0aW9uXzI5NjgyNg==",
                        "name": "Type"
                    },
                    "translations": [
                        {
                            "value": "Sponsor"
                        }
                    ]
                }
            ]
        }
    ]
}




function Partners({ partnerData }) {
	console.log('swapcard partner data:', LEGACY_PARTNER_DATA)

	// use fieldDefinitions to automate partner categorisation (requires ID of the selectFieldDefinition used to tag categories inside SC studio)

	const swapcardPartnerGroups = LEGACY_PARTNER_DATA.event.fieldDefinitions.find( arr => arr.id === "RmllbGREZWZpbml0aW9uXzI5NjgyNg==").optionsValues
	const partnersArray = []
	
	swapcardPartnerGroups.map( category => {
		const partnerGroup = []
		
		LEGACY_PARTNER_DATA.exhibitors.map( partner => {
			partner.fields.map( field => {
				if ( field.id === category.id ) partnerGroup.push( partner )
			})
		})
		
		if (partnerGroup.length) {
			partnersArray.push(
				{
					group: category,
					partners: partnerGroup
				}
			)
		}
	})
	


	
	// console.log('content-blocks:', contentBlocks)
	// console.log('vts:', videoTestimonials)
	// console.log('swapcard partner categories:', swapcardPartnerGroups )
	// console.log('PARTNERS ARRAY:', partnersArray)



	return (
		<>

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
            </Head>

            <EventsBar site={'/africa'} />
            <Header
                site={`/africa`}
                handle={`Africa`}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
                ctas={header.data.event.headerCtas}
            />



			{/* PARTNERS */}

			<section className='block pb-0 mt-lg'>
				<div className='container center formatted'>
					<p className='fs-1 fw-600'>2025 Sponsors &amp; Partners</p>
				</div>
			</section>

			<PartnerCategoryGrid>
				{
					partnersArray.length &&
					partnersArray.map( (category, index) => (
						<>
							<PartnerCategory key={index}>

								<div className="block pt-0">
									<h4 className='fs-5 fw-600 caps pb-xs'>{ category.group.translations[0].value }</h4>
									<PartnerLogoGrid>
										{
											_.orderBy( category.partners, [(p) => p.name.toLowerCase()] ).map(partner => (
												<div key={partner.id}>
													{
														partner.logoUrl &&
														<PartnerLogo 
															src={ partner.logoUrl } 
															label={ partner.id === "RXhoaWJpdG9yXzIxNzg3Nzg=" && 'China' }
														/>
													}
												</div>
											))
										}
									</PartnerLogoGrid>
								</div>
								
							</PartnerCategory>

						</>
					))
				}
			</PartnerCategoryGrid>
				
			

			<Footer theme={{ footerBg: 'bg-white' }} />
			<LenisScroller />
		</>
	)
}

Partners.theme = 'africa'



export async function getStaticProps() {


	const swapcardData = await fetch(
		"https://developer.swapcard.com/event-admin/graphql",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": process.env.SWAPCARD_AUTH_KEY
			},
			body: JSON.stringify({
				query: `
					query {
						event(id: "${process.env.SWAPCARD_EVENT_ID_AFRICA_2025}") {
							fieldDefinitions {
								... on SelectFieldDefinition {
									id
									name
									optionsValues {
										id
										value
										translations {
											language
											value
										}
									}
								}
							}
						}
						exhibitors(eventId: "${process.env.SWAPCARD_EVENT_ID_AFRICA_2025}", page:1, pageSize: 200) {
							id
							name
							logoUrl
							fields {
								... on SelectField {
									id
									value
									definition {
										id
										name
									}
									translations {
										value
									}
								}
							}
						}
					}
				`,
				variables: {
					"eventId": process.env.SWAPCARD_EVENT_ID_AFRICA_2025,
					"page": 1
				}
			})
		}
	)

	console.log(swapcardData)
	
	const partnerData =  await swapcardData.json()
	
	return {
		props: { 
			partnerData: partnerData.data,
		}
	}
}

export default Partners


