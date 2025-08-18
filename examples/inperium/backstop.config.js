module.exports = {
  "id": "inperium-prod-vs-test",
  "viewports": [
    {
      "label": "phone",
      "width": 375,
      "height": 800
    },
    {
      "label": "tablet",
      "width": 768,
      "height": 1024
    },
    {
      "label": "desktop",
      "width": 1366,
      "height": 800
    }
  ],
  "engine": "playwright",
  "engineOptions": {
    "browser": "chromium",
    "headless": true,
    "args": [
      "--no-sandbox"
    ],
    "waitTimeout": 90000,
    "actionTimeout": 120000,
    "gotoParameters": {
      "waitUntil": "networkidle"
    }
  },
  "scenarios": [
    {
      "label": "001_home",
      "url": "https://test.inperium.org/",
      "referenceUrl": "https://inperium.org/",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "002_news_recently-released-business-model-innovation-nonprofit-consolidators",
      "url": "https://test.inperium.org/news/recently-released-business-model-innovation-nonprofit-consolidators",
      "referenceUrl": "https://inperium.org/news/recently-released-business-model-innovation-nonprofit-consolidators",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "003_news_inperium-inc-ims-featured-march-26-2019-business-weekly-profile",
      "url": "https://test.inperium.org/news/inperium-inc-ims-featured-march-26-2019-business-weekly-profile",
      "referenceUrl": "https://inperium.org/news/inperium-inc-ims-featured-march-26-2019-business-weekly-profile",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "004_news_introducing-alvarium-healthcare-inc",
      "url": "https://test.inperium.org/news/introducing-alvarium-healthcare-inc",
      "referenceUrl": "https://inperium.org/news/introducing-alvarium-healthcare-inc",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "005_news_introducing-south-jersey-behavioral-health-resources",
      "url": "https://test.inperium.org/news/introducing-south-jersey-behavioral-health-resources",
      "referenceUrl": "https://inperium.org/news/introducing-south-jersey-behavioral-health-resources",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "006_news_ryan-smith-founder-ceo-interviewed-weeu-radio",
      "url": "https://test.inperium.org/news/ryan-smith-founder-ceo-interviewed-weeu-radio",
      "referenceUrl": "https://inperium.org/news/ryan-smith-founder-ceo-interviewed-weeu-radio",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "007_news_introducing-wake-enterprises-inc",
      "url": "https://test.inperium.org/news/introducing-wake-enterprises-inc",
      "referenceUrl": "https://inperium.org/news/introducing-wake-enterprises-inc",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "008_news_inperium-travels-south-participate-sponsor-wake-enterprises-golf-outing",
      "url": "https://test.inperium.org/news/inperium-travels-south-participate-sponsor-wake-enterprises-golf-outing",
      "referenceUrl": "https://inperium.org/news/inperium-travels-south-participate-sponsor-wake-enterprises-golf-outing",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "009_news_affiliation-reading-specialists-educational-association",
      "url": "https://test.inperium.org/news/affiliation-reading-specialists-educational-association",
      "referenceUrl": "https://inperium.org/news/affiliation-reading-specialists-educational-association",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "010_news_we-acquired-youth-services-agency",
      "url": "https://test.inperium.org/news/we-acquired-youth-services-agency",
      "referenceUrl": "https://inperium.org/news/we-acquired-youth-services-agency",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "011_news_acquired-new-jersey-addictions-affiliate",
      "url": "https://test.inperium.org/news/acquired-new-jersey-addictions-affiliate",
      "referenceUrl": "https://inperium.org/news/acquired-new-jersey-addictions-affiliate",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "012_news_announcing-inperium-new-jersey-inc",
      "url": "https://test.inperium.org/news/announcing-inperium-new-jersey-inc",
      "referenceUrl": "https://inperium.org/news/announcing-inperium-new-jersey-inc",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "013_news_edison-courts-affiliates-inperium",
      "url": "https://test.inperium.org/news/edison-courts-affiliates-inperium",
      "referenceUrl": "https://inperium.org/news/edison-courts-affiliates-inperium",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "014_news_introducing-ocellus-tech-llc",
      "url": "https://test.inperium.org/news/introducing-ocellus-tech-llc",
      "referenceUrl": "https://inperium.org/news/introducing-ocellus-tech-llc",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "015_news_inperium-successfully-closes-37mm-financing-under-newly-created-master-trust-indenture",
      "url": "https://test.inperium.org/news/inperium-successfully-closes-37mm-financing-under-newly-created-master-trust-indenture",
      "referenceUrl": "https://inperium.org/news/inperium-successfully-closes-37mm-financing-under-newly-created-master-trust-indenture",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "016_news_introducing-advancing-opportunities-inc",
      "url": "https://test.inperium.org/news/introducing-advancing-opportunities-inc",
      "referenceUrl": "https://inperium.org/news/introducing-advancing-opportunities-inc",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "017_news_seashore-family-services-new-jersey-merges-iron-recovery-wellness-center-inc",
      "url": "https://test.inperium.org/news/seashore-family-services-new-jersey-merges-iron-recovery-wellness-center-inc",
      "referenceUrl": "https://inperium.org/news/seashore-family-services-new-jersey-merges-iron-recovery-wellness-center-inc",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "018_news_conexio-care-inc-acquires-connections-community-support-programs-inc",
      "url": "https://test.inperium.org/news/conexio-care-inc-acquires-connections-community-support-programs-inc",
      "referenceUrl": "https://inperium.org/news/conexio-care-inc-acquires-connections-community-support-programs-inc",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "019_news_inperium-timmy-brown-take-part-pittsburgh-pirates-game",
      "url": "https://test.inperium.org/news/inperium-timmy-brown-take-part-pittsburgh-pirates-game",
      "referenceUrl": "https://inperium.org/news/inperium-timmy-brown-take-part-pittsburgh-pirates-game",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "020_news_abraxas-youth-and-family-services-has-entered-definitive-affiliation-agreement-inperium",
      "url": "https://test.inperium.org/news/abraxas-youth-and-family-services-has-entered-definitive-affiliation-agreement-inperium",
      "referenceUrl": "https://inperium.org/news/abraxas-youth-and-family-services-has-entered-definitive-affiliation-agreement-inperium",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "021_news_inperium-has-entered-binding-letter-intent-shelby-residential-and-vocational-services",
      "url": "https://test.inperium.org/news/inperium-has-entered-binding-letter-intent-shelby-residential-and-vocational-services",
      "referenceUrl": "https://inperium.org/news/inperium-has-entered-binding-letter-intent-shelby-residential-and-vocational-services",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "022_news_shannon-durbin-mba-hired-executive-vice-president-inperium-mid-south",
      "url": "https://test.inperium.org/news/shannon-durbin-mba-hired-executive-vice-president-inperium-mid-south",
      "referenceUrl": "https://inperium.org/news/shannon-durbin-mba-hired-executive-vice-president-inperium-mid-south",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "023_news_becky-harding-hired-director-operations-and-business-development-mid-south-inperium-inc",
      "url": "https://test.inperium.org/news/becky-harding-hired-director-operations-and-business-development-mid-south-inperium-inc",
      "referenceUrl": "https://inperium.org/news/becky-harding-hired-director-operations-and-business-development-mid-south-inperium-inc",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "024_news_michael-c-herr-hired-executive-vice-president-and-chief-insurance-and-risk-officer",
      "url": "https://test.inperium.org/news/michael-c-herr-hired-executive-vice-president-and-chief-insurance-and-risk-officer",
      "referenceUrl": "https://inperium.org/news/michael-c-herr-hired-executive-vice-president-and-chief-insurance-and-risk-officer",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "025_news_george-contos-hired-ceo-inperium-ny-and-chief-strategy-legal-officer-inperium",
      "url": "https://test.inperium.org/news/george-contos-hired-ceo-inperium-ny-and-chief-strategy-legal-officer-inperium",
      "referenceUrl": "https://inperium.org/news/george-contos-hired-ceo-inperium-ny-and-chief-strategy-legal-officer-inperium",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "026_news_jon-swatsburg-abraxas-president-ceo-announces-his-departure",
      "url": "https://test.inperium.org/news/jon-swatsburg-abraxas-president-ceo-announces-his-departure",
      "referenceUrl": "https://inperium.org/news/jon-swatsburg-abraxas-president-ceo-announces-his-departure",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "027_news_john-r-loyack-appointed-senior-executive-vice-president-and-chief-consultative-officer",
      "url": "https://test.inperium.org/news/john-r-loyack-appointed-senior-executive-vice-president-and-chief-consultative-officer",
      "referenceUrl": "https://inperium.org/news/john-r-loyack-appointed-senior-executive-vice-president-and-chief-consultative-officer",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "028_news_inperium-announces-financing-keybank-and-jpmorgan-chase",
      "url": "https://test.inperium.org/news/inperium-announces-financing-keybank-and-jpmorgan-chase",
      "referenceUrl": "https://inperium.org/news/inperium-announces-financing-keybank-and-jpmorgan-chase",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "029_news_inperium-and-resources-human-development-announce-affiliation",
      "url": "https://test.inperium.org/news/inperium-and-resources-human-development-announce-affiliation",
      "referenceUrl": "https://inperium.org/news/inperium-and-resources-human-development-announce-affiliation",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "030_news_inperium-and-trinity-youth-services-announce-affiliation",
      "url": "https://test.inperium.org/news/inperium-and-trinity-youth-services-announce-affiliation",
      "referenceUrl": "https://inperium.org/news/inperium-and-trinity-youth-services-announce-affiliation",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "031_news_inperium-and-popcorn-people-announce-affiliation",
      "url": "https://test.inperium.org/news/inperium-and-popcorn-people-announce-affiliation",
      "referenceUrl": "https://inperium.org/news/inperium-and-popcorn-people-announce-affiliation",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "032_news_inperium-inc-announces-closing-rhd-affiliation",
      "url": "https://test.inperium.org/news/inperium-inc-announces-closing-rhd-affiliation",
      "referenceUrl": "https://inperium.org/news/inperium-inc-announces-closing-rhd-affiliation",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "033_news_inperium-inc-closes-175000000-tax-exempt-bond-issue",
      "url": "https://test.inperium.org/news/inperium-inc-closes-175000000-tax-exempt-bond-issue",
      "referenceUrl": "https://inperium.org/news/inperium-inc-closes-175000000-tax-exempt-bond-issue",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "034_news_inperium-inc-announces-appointment-elise-tretola",
      "url": "https://test.inperium.org/news/inperium-inc-announces-appointment-elise-tretola",
      "referenceUrl": "https://inperium.org/news/inperium-inc-announces-appointment-elise-tretola",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "035_news_inperium-inc-and-holly-hill-childrens-home-inc-holly-hill-have-agreed-affiliate",
      "url": "https://test.inperium.org/news/inperium-inc-and-holly-hill-childrens-home-inc-holly-hill-have-agreed-affiliate",
      "referenceUrl": "https://inperium.org/news/inperium-inc-and-holly-hill-childrens-home-inc-holly-hill-have-agreed-affiliate",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "036_news_gerald-archibald-will-be-stepping-down-his-role",
      "url": "https://test.inperium.org/news/gerald-archibald-will-be-stepping-down-his-role",
      "referenceUrl": "https://inperium.org/news/gerald-archibald-will-be-stepping-down-his-role",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "037_news_theo-rallis-appointed-senior-executive-vice-president-and-chief-financial-officer",
      "url": "https://test.inperium.org/news/theo-rallis-appointed-senior-executive-vice-president-and-chief-financial-officer",
      "referenceUrl": "https://inperium.org/news/theo-rallis-appointed-senior-executive-vice-president-and-chief-financial-officer",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "038_news_inperium-inc-and-angler-west-consultants-inc-end-10-year-partnership",
      "url": "https://test.inperium.org/news/inperium-inc-and-angler-west-consultants-inc-end-10-year-partnership",
      "referenceUrl": "https://inperium.org/news/inperium-inc-and-angler-west-consultants-inc-end-10-year-partnership",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "039_news_stronger-future-together-how-affiliation-inperium-improves-lives",
      "url": "https://test.inperium.org/news/stronger-future-together-how-affiliation-inperium-improves-lives",
      "referenceUrl": "https://inperium.org/news/stronger-future-together-how-affiliation-inperium-improves-lives",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "040_news_understanding-affiliation-inperium-agreements-empower",
      "url": "https://test.inperium.org/news/understanding-affiliation-inperium-agreements-empower",
      "referenceUrl": "https://inperium.org/news/understanding-affiliation-inperium-agreements-empower",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "041_news_financial-advantages-affiliation-inperium",
      "url": "https://test.inperium.org/news/financial-advantages-affiliation-inperium",
      "referenceUrl": "https://inperium.org/news/financial-advantages-affiliation-inperium",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "042_news_children-and-family-services-corp-joins-inperium-network",
      "url": "https://test.inperium.org/news/children-and-family-services-corp-joins-inperium-network",
      "referenceUrl": "https://inperium.org/news/children-and-family-services-corp-joins-inperium-network",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "043_node_1",
      "url": "https://test.inperium.org/node/1",
      "referenceUrl": "https://inperium.org/node/1",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "044_news",
      "url": "https://test.inperium.org/news",
      "referenceUrl": "https://inperium.org/news",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "045_contact-us",
      "url": "https://test.inperium.org/contact-us",
      "referenceUrl": "https://inperium.org/contact-us",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "046_about",
      "url": "https://test.inperium.org/about",
      "referenceUrl": "https://inperium.org/about",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "047_leadership",
      "url": "https://test.inperium.org/leadership",
      "referenceUrl": "https://inperium.org/leadership",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "048_financials-impact",
      "url": "https://test.inperium.org/financials-impact",
      "referenceUrl": "https://inperium.org/financials-impact",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "049_business-model",
      "url": "https://test.inperium.org/business-model",
      "referenceUrl": "https://inperium.org/business-model",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    },
    {
      "label": "050_partnership-structures",
      "url": "https://test.inperium.org/partnership-structures",
      "referenceUrl": "https://inperium.org/partnership-structures",
      "selectors": [
        "document"
      ],
      "selectorExpansion": true,
      "requireSameDimensions": true,
      "misMatchThreshold": 0.1
    }
  ],
  "paths": {
    "bitmaps_reference": "examples/inperium/backstop_data/bitmaps_reference",
    "bitmaps_test": "examples/inperium/backstop_data/bitmaps_test",
    "engine_scripts": "capture/engine_scripts/playwright",
    "html_report": "examples/inperium/backstop_data/html_report",
    "ci_report": "examples/inperium/backstop_data/ci_report"
  },
  "report": [
    "browser",
    "CI"
  ],
  "asyncCaptureLimit": 3,
  "asyncCompareLimit": 20,
  "debug": false
};
