# API
## Health & Safety
###Injuries And Illness API
http://api.dol.gov/V1/Safety/InjuriesAndIllness

The Injuries, Illnesses, and Fatalities (IIF) program provides annual information on the rate and number of work related injuries, illnesses, and fatal injuries, and how these statistics vary by incident, industry, geography, occupation, and other characteristics. More information and details about the data provided can be found at http://www.bls.gov/data/#injuries.

```shell
curl "https://api.dol.gov/V1/Safety/InjuriesAndIllness/?KEY=YOUR_API_KEY" -H "Accept: application/json"
```
```json
{
    "d": {
        "EntitySets": [
            "II_AREA",
            "II_CASE_TYPE",
            "II_DATA_PUB",
            "II_DATA_TYPE",
        ]
    }
}
```

###Gulf Oil Spill API
http://api.dol.gov/V1/Safety/GulfOilSpill

Following its sampling plan, OSHA industrial hygienists are monitoring workers engaged in the oil spill clean up in the Gulf of Mexico for exposure to hazardous chemicals and conditions. These data tables provide sample results for chemicals, noise, and heat stress index measurements. Samples to assess airborne concentrations of oil, weathered oil, oil dispersants, cleaning agents and other materials as identified are taken. When evaluating worker exposure, direct reading instruments and shift-long sampling is performed in the actual breathing zone of workers. OSHA has also sampled areas that are periodically frequented by workers but the samples are not taken from the breathing zone of workers. Finally, OSHA has sampled directly over tar balls, inside bags containing contaminated materials, and other locations that do not represent worker exposure but provide information on the types of chemicals that may be coming off contaminated materials.

###DOL OSHA Compliance API
http://api.dol.gov/V1/Safety/Fatalities

This dataset provides summaries of fatalities and catastrophes resulting in the hospitalization of three or more workers. Employers must report these incidents to OSHA within eight hours. The summaries include only preliminary information, as reported to OSHA Area Offices or to States which operate OSHA-approved State Plans. OSHA investigates all work-related fatalities and catastrophes. Once an OSHA investigation is complete, the summary report will be updated with a webpage link to the corresponding inspection, which will list citation information. More information can be found at http://www.osha.gov/dep/fatcat/dep_fatcat.html

###MSHA Employment Production API
http://api.dol.gov/V1/Employment

This dataset contains the annual summation of employee hours and coal production reported by mine operators where the average quarterly employment is greater than zero with grouping by calendar year, subunit code and mine ID beginning with 1983. The subunit code identifies the location or operation of the mine relating to the: (01) Underground; (02) Surface at underground; (03) Strip, quarry, open pit; (04) Auger; (05) Culm bank/refuse pile; (06) Dredge; (12) Other mining; (17) Independent shops or yards; (30) Mill operation/preparation plant; (99) Office workers at mine site.

###Mine Violation API
http://api.dol.gov/V1/Mining/Violation

This dataset contains violations issued from 1/1/1978 to 1/1/2000 as a result of MSHA inspections. Each inspection results in a unique Event Number that can be associated with many violations and is a direct link to the Inspections Data Set. The violator name at the time of the violation, the actual date the violation occurred and the date the violation was issued are in this file. This table contains details about the specific citation/order/safeguard issued, such as Section of the Act, relevant dates and the conditions or practices which caused and constituted a violation or an imminent danger. The data is captured from (MSHA form 7000-3).

###Fatal Occupational Injuries API
http://api.dol.gov/V1/Safety/FatalOccupationalInjuries

Allows users to search nonfatal and fatal data for the nation and for States from the most current Survey of Occupational Injuries and Illnesses and the Census of Fatal Occupational Injuries programs. Users can search by industry, demographic characteristics, and case characteristics. Historical data for years prior to the current year. More information and details about the data provided can be found at http://www.bls.gov/data/#injuries.

###DOL OSHA Enforcement API
The dataset consists of inspection case detail for approximately 90,000 OSHA inspections conducted annually. The dataset includes information regarding the impetus for conducting the inspection, and details on citations and penalty assessments resulting from violations of OSHA standards. Additionally, accident investigation information is provided, including textual descriptions of the accident, and details regarding the injuries and fatalities which occurred. For more information refer to: www.osha.gov.

View OSHA's metric codes on the 'Data Enforcement' page under 'OSHA Enforcement Data' or Downloaded.

The following datasets use offset for pagination so you can gather more than the limit of 200 records. For more detailed information read about the how to use our offset under the "data.dol.gov" tab.

###Auto Workers API
http://api.dol.gov/V1/AutoWorkers

This dataset tells you Auto Companies which are closed or repurposed in the last couple of decades. It also shows you how successful or bad the closure process or the repurpose process is and in which state and city these companies found.

###Safety and Health API
http://api.dol.gov/V1/SafetyHealth

Data related to safety and health in the workplace.

###Full Mine Information Mines API
http://api.dol.gov/V1/Mining/FullMineInfo/

The Full Mine Info dataset lists all Coal and Metal/Non-Metal mines under MSHA's jurisdiction since 1/1/1970. It includes such information as the current status of each mine (Active, Abandoned, NonProducing, etc.), the current owner and operating company, commodity codes and physical attributes of the mine. Mine ID is the unique key for this data.

###Basic Mine Information API
http://api.dol.gov/V1/Mining/BasicMineInfo

The Basic Mine Info dataset lists basic information on all Coal and Metal/Non-Metal mines under MSHA's jurisdiction since 1/1/1970. It includes such information as the current status of each mine (Active, Abandoned, NonProducing, etc.), the current owner and operating company, commodity codes and physical attributes of the mine.

Note: This dataset used to be "Address of record". The name was changed due to content organization so did the location.

This complete dataset can be found at https://catalog.data.gov/dataset/basic-mine-information-mine-address-of-record

###Mine Accident Injuries API
http://api.dol.gov/V1/Safety/Accidents

This dataset contains information on all accidents, injuries and illnesses reported by mine operators and contractors beginning with 1983. The data in the table is obtained from the Mine Accident, Injury and Illness Report form (MSHA Form 7000-1). Document number is the unique key for this data. It provides information about the accident/injury/illness such as type, mine location, lost days and the degree of injury.

This complete dataset can be found at https://catalog.data.gov/dataset/mine-accident-injuries

###OSHA Compliance API
http://api.dol.gov/V1/Compliance/OSHA

The dataset consists of inspection case detail for approximately 100,000 OSHA inspections conducted annually. The dataset includes information regarding the impetus for conducting the inspection, and details on citations and penalty assessments resulting from violations of OSHA standards.More information and details about the data provided can be found at http://www.osha.gov

This complete dataset can be found on the DOL Data Enforcement application at http://enforcedata.dol.gov

###Mine Inspections API
http://api.dol.gov/V1/Compliance/MineInspection

The Mine Inspections dataset lists every mine inspection conducted by MSHA dating back to 1/1/1978. The data includes the name of the mine inspected, MSHA's internal inspection number (event number), the type of inspection and the start and end dates of the inspection. Event Number is the unique key for this dataset. It also includes the Mine ID associated with the inspections which can be used to relate it to the Mines Data Set.

This complete dataset can be found at https://explore.data.gov/Energy-and-Utilities/Mine-Inspections/wt25-mkey

## Wage & hours
Farm Labor Contractor and Farm Labor Contractor Employee API

Wage and Hour Publications System API

WHD Compliance API

## Expanding Growth<br>Opportunities & Learning
Public Workforce System API

OUI Initial Claims API

IPIA API

Quarterly Census Employment and Wage (CEW) API

Occupational Employment Statistics Survey (OES) API

Current Population Survey (CPS) API

Current Employment Statistics (CES) API

Consumer Price Indexes (CPI) API

2010 Workforce Investment Act API

2010 Occupational Employment Statistics API

BLS Numbers API

## Other Datasets
Sweat & Toil API

VETS4212 API

VETS100 API

API Metrics (per key) API

Research And Evaluation Inventory API

Geography API

Form API

Frequently Asked Questions (FAQ) API

API Metadata API

Agency API