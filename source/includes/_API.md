# API
## Health & Safety
###Injuries And Illness API

```shell
curl "https://api.dol.gov/V1/Safety/InjuriesAndIllness/?KEY=YOUR_API_KEY" -H "Accept: application/json"

{
    "d": {
        "EntitySets": [
            "II_AREA",
            "II_CASE_TYPE",
            "II_DATA_PUB",
            "II_DATA_TYPE",
            ...
        ]
    }
}
```

http://api.dol.gov/V1/Safety/InjuriesAndIllness

The Injuries, Illnesses, and Fatalities (IIF) program provides annual information on the rate and number of work related injuries, illnesses, and fatal injuries, and how these statistics vary by incident, industry, geography, occupation, and other characteristics. More information and details about the data provided can be found at http://www.bls.gov/data/#injuries.

#### Dataset Tables

##### II_AREA Table

Area 

| Column Name               | Data Type               | Column Description                                                                                                                                                                                                                   |  
| ------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |  
| Column Name AREA_CODE     | Data Type varchar (3)   | Column Description Unique code used to identify a specific geographic region. Choose combination of ownership (all, private, state, local, or state and local) and state . See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.area. |  
| Column Name AREA_NAME     | Data Type varchar (100) | Column Description Describes the specific geographic region. Choose combination of ownership (all, private, state, local, or state and local) and state . See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.area.                  |  
| Column Name DISPLAY_LEVEL | Data type varchar (2)   | Coloumn Description A hierarchy of various levels. A proprietary nesting scheme.                                                                                                                                                     |  
| Column Name SELECTABLE    | Data Type varchar (1)   | Column Description A permission to choose (T) a variable in which reasonable data is assured.                                                                                                                                        |  
| Column Name SORT_SEQUENCE | Data Type  varchar (5)  | Column Description Order in which variables are displayed.                                                                                                                                                                           |  

##### II_CASE_TYPE Table

Case Type 

| Column Name                | Data Type              | Column Description                                                                                                                                                                                                                                                                                                                                                                                                                                |  
| -------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| Column Name CASE_TYPE_CODE | Data Type Varchar (1)  | Column Description The code identifies the type of case for which data are available. Choose total recordable cases (all, poisoning, skin disease, hearing loss, respiratory illness, or all other) or involving days away from work, days of job transfer and restriction, or all three. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.case_type. Definitions for days away from work, job transfer, and job restriction are listed below. |  
| Column Name CASE_TYPE_TEXT | Data Type Varchar(100) | Column Description Describes case for which data are available. Choose total recordable cases (all, poisoning, skin disease, hearing loss, respiratory illness, or all other) or involving days away from work, days of job transfer and restriction, or all three. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.case_type. Definitions for days away from work, job transfer, and job restriction are listed below.                       |  

##### II_DATA_PUB Table

Data Pub 

| Column Name                | Data Type              | Column Description                                                                                                          |  
| -------------------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------- |  
| Column Name SERIES_ID      | Data Type Varchar (17) | Column Description Code identifying the specific series. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.data.1.AllData |  
| Column Name YEAR           | Data type Varchar(4)   | Column Description Identifies year of observation between 2003-2010 for every Series ID                                     |  
| Column Name PERIOD         | Data Type Varchar(3)   | Column Description Identifies the period of the observation (annual, monthly, quarterly).                                   |  
| Column Name VALUE          | Data Type Varchar(12)  | Column Decscription Data values for series.                                                                                 |  
| Column Name FOOTNOTE_CODES | Data Type Varchar(10)  | Column Description Identifies footnote for the data series.                                                                 |  

##### II_DATA_TYPE Table

Data Type 

| Column Name                | Data Type              | Column Description                                                                                                                                                                                                |  
| -------------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| Column Name DATA_TYPE_CODE | Data Type Varchar (1)  | Column Description Code identifying the datatype of the observation. Choose rate or number of illness or injury cases or illness and injury cases. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.data_type. |  
| Column Name DATA_TYPE_TEXT | Data Type Varchar(100) | Column Descrition Describes the datatype of the observation. Choose rate or number of illness or injury cases or illness and injury cases. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.data_type.         |  

Footnote 

| Column Name               | Data Type              | Column Description                                                                                                        |  
| ------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------- |  
| Column Name FOOTNOTE_CODE | Data Type Varchar (1)  | Column Description Identifies footnote for the data series. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.footnote. |  
| Column Name FOOTNOTE_TEXT | Data Type Varchar(100) | Column Description Contains the text of the footnote. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.footnote        |  

##### II_GQT_CASE Table

GQT Case 

| Column Name                       | Data Type              | Coloumn Description                                                                                                                                                                                                                                                                                                                                                                                                                                |  
| --------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| Column Name GQT_CASE_COMPONENT    | Data Type Varchar (3)  | Column Description Abbreviations for type of case component (industry, occupation, source, event, occupation).                                                                                                                                                                                                                                                                                                                                     |  
| Column Name GQT_CASE_CODE         | Data Type Varchar(1)   | Column Description The code identifies the type of case for which data are available. Choose total recordable cases (all, poisoning, skin disease, hearing loss, respiratory illeness, or all other) or involving days away from work, days of job transfer and restriction, or all three. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.case_type. Definitions for days away from work, job transfer, and job restriction are listed below. |  
| Column Name GQT_CASE_TEXT         | Data Type Varchar (50) | Column Description Describes case for which data are available. Choose total recordable cases (all, poisoning, skin disease, hearing loss, respiratory illeness, or all other) or involving days away from work, days of job transfer and restriction, or all three. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.case_type. Definitions for days away from work, job transfer, and job restriction are listed below.                       |  
| Column Name GQT_CASE_TABLE_NAME   | Data type Varchar(50)  | Column Description Describes the database tables to reference for the application based on code and component.                                                                                                                                                                                                                                                                                                                                     |  
| Column Name GQT_CASE_COLUMN_NAMES | Data Type Varchar (50) | Column Description Describes the table columns to display from the CASE_TABLE_NAME.                                                                                                                                                                                                                                                                                                                                                                |  
| Column Name GQT_CASE_TITLE        | Data Type Varchar(50)  | Column Description Contains the generic case selection.                                                                                                                                                                                                                                                                                                                                                                                            |  
| Column Name GQT_ORDER             | Data Type Varchar (20) | Column Description Order in which variables are displayed.                                                                                                                                                                                                                                                                                                                                                                                         |  
| Column Name GQT_DISPLAY           | Data Type Int 64       | Column Description Whether CASE_CODE is displayed or not.                                                                                                                                                                                                                                                                                                                                                                                          |  
| Column Name GQT_CODE_DISPLAY      | Data Type Int 64       | Column Description Code Display.                                                                                                                                                                                                                                                                                                                                                                                                                   |  

##### II_GQT_CHAR Table

GQT Character 

| Column Name                    | Data Type             | Column Description                                                                                                                                                                                                                                                                                                                                        |  
| ------------------------------ | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| Column Name GQT_REPORT_ID      | Data Type Varchar (1) | Column Description Describes to the application the Report format to display selected information.                                                                                                                                                                                                                                                        |  
| Column Name GQT_CASE_CODE      | Data Type Varchar(1)  | Column Description The code identifies the type of case for which data are available. Choose total recordable cases (all, poisoning, skin disease, hearing loss, respiratory illeness, or all other) or involving days away from work, days of job transfer and restriction, or all three. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.case_type. |  
| Column Name GQT_CASE_COMPONENT | Data Type Varchar (3) | Column Description Abbreviations for type of case component.                                                                                                                                                                                                                                                                                              |  

##### II_GQT_OWNERSHIP Table

GQT Ownership 

| Column Name                | Data Type             | Column Description                                                                                                       |  
| -------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------ |  
| Column Name OWNERSHIP_CODE | Data Type Varchar (1) | Column Description Unique code used to identify a specific ownership type (private, state government, local government). |  
| Column Name OWNERSHIP_NAME | Data Type Varchar(50) | Column Description Describes the ownership type for the observation (private, state government, local government, all).  |  
| Column Name SORT_SEQUENCE  | Data Type Varchar (5) | Column Description Display order of ownership for application.                                                           |  

##### II_GQT_STATE Table

GQT State 

| Column Name               | Data Type             | Column Description                                                                                 |  
| ------------------------- | --------------------- | -------------------------------------------------------------------------------------------------- |  
| Column Name STATE_CODE    | Data Type Varchar (2) | Column Description Unique code used to identify the state or area associated with the observation. |  
| Column Name STATE_NAME    | Data Type Varchar(50) | Column Description State or area name associated with the observation.                             |  
| Column Name SORT_SEQUENCE | Data Type Varchar (5) | Column Description Order in which variables are displayed.                                         |  

##### II_GQT_STATE_OWNERSHIP Table

GQT State Ownership 

| Column Name                | Data Type             | Column Description                                                                                                       |  
| -------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------ |  
| Column Name YEAR           | Data Type Varchar (4) | Column Description Identifies year of observation between 2003-2010 for every Series ID.                                 |  
| Column Name OWNERSHIP_CODE | Data Type             | Column Description Unique code used to identify a specific ownership type (private, state government, local government). |  
| Column Name STATE_CODE     | Data Type Varchar(3)  | Column Description Unique code used to identify the state or area associated with the observation.                       |  
| Column Name STATE_NAME     | Data Type Varchar(50) | Column Description State or area name associated with the observation.                                                   |  
| Column Name SORT_SEQUENCE  | Data Type Varchar (5) | Column Description Order in which variables are displayed.                                                               |  

##### II_INDUSTRY Table

Industry 

| Column Name                  | Data Type               | Column Description                                                                                                                                                                                                                                                                                                                  |  
| ---------------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| Column Name SUPERSECTOR_CODE | Data Type Varchar (3)   | Column Description Unique code use to identify the supersectors (Cobstruction, Education & Health Services, Financial Activities, Information, Leisure & Hospitality, Manufacturing, Natural Resources & Mining, Trade Transportation & Utilities, or Professional & Business Services). Definition of supersector is provided below.|  
| Column Name INDUSTRY_CODE    | Data Type Varchar(6)    | Column Description The code identifies the industry for which data are observed. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.industry. See industry definition below.                                                                                                                                                       |  
| Column Name INDUSTRY_NAME    | Data Type Varchar (100) | Column Description Describes the industry for which data are observed. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.industry. See industry definition below.                                                                                                                                                                 |  
| Column Name DISPLAY_LEVEL    | Data Type Varchar (2)   | Column Description A hierarchy of various levels. A proprietary nesting scheme.                                                                                                                                                                                                                                                     |  
| Column Name SELECTABLE       | Data Type Varchar(1)    | Column Description A permission to choose (T) a variable in which reasonable data is assured.                                                                                                                                                                                                                                       |  
| Column Name SORT_SEQUENCE    | Data Type Varchar (5)   | Column Description Order in which variables are displayed.                                                                                                                                                                                                                                                                          |  

##### II_SERIES Table

Series 

| Column Name                  | Data Type              | Column Description                                                                                                                                                                                                                                                                                                                                                                                                                                 |  
| ---------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| Column Name SERIES_ID        | Data Type Varchar (17) | Column Description Code identifying the specific series. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.series.                                                                                                                                                                                                                                                                                                                               |  
| Column Name SUPERSECTOR_CODE | Data Type Varchar (3)  | Column Description Unique code use to identify the supersectors (Cobstruction, Education & Health Services, Financial Activities, Information, Leisure & Hospitality, Manufacturing, Natural Resources & Mining, Trade Transportation & Utilities, or Professional & Business Services). Definition of supersector is provided below.                                                                                                              |  
| Column Name INDUSTRY_CODE    | Data Type Varchar(6)   | Column Description The code identifies the industry for which data are observed. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.industry. See industry definition below.                                                                                                                                                                                                                                                                      |  
| Column Name DATA_TYPE_CODE   | Data Type Varchar (1)  | Column Description Code identifying the datatype of the observation. Choose rate or number of illness or injury cases or illness and injury cases. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.data_type.                                                                                                                                                                                                                                  |  
| Column Name CASE_TYPE_CODE   | Data Type Varchar (1)  | Column Description The code identifies the type of case for which data are available. Choose total recordable cases (all, poisoning, skin disease, hearing loss, respiratory illeness, or all other) or involving days away from work, days of job transfer and restriction, or all three. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.case_type. Definitions for days away from work, job transfer, and job restriction are listed below. |  
| Column Name AREA_CODE        | Data Type Varchar(3)   | Column Description Unique code used to identify a specific geographic region. Choose combination of ownership (all, private, state, local, or state and local) and state . See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.area.                                                                                                                                                                                                               |  
| Column Name FOOTNOTE_CODES   | Data Type Varchar (10) | Column Description Identifies footnote for the data series. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.footnote.                                                                                                                                                                                                                                                                                                                          |  
| Column Name BEGIN_YEAR       | Data Type Varchar(4)   | Column Description Identifies first year for which data are available (2003-2008).                                                                                                                                                                                                                                                                                                                                                                 |  
| Column Name BEGIN_PERIOD     | Data Type Varchar(3)   | Column Description Identifies first data observation within the first year for which data are available.                                                                                                                                                                                                                                                                                                                                           |  
| Column Name END_YEAR         | Data Type Varchar (4)  | Column Description Identifies last year for which data are available (2005-2010).                                                                                                                                                                                                                                                                                                                                                                  |  
| Column Name END_PERIOD       | Data Type Varchar (3)  | Column Description Varchar (3)Identifies last data observation within the first year for which data are available.                                                                                                                                                                                                                                                                                                                                 |  

##### II_SUPERSECTOR Table

Supersector 

| Column Name                  | Data Type               | Column Description                                                                                                                                                                                                                                                                                                                  |  
| ---------------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| Column Name SUPERSECTOR_CODE | Data Type Varchar (3)   | Column Description Unique code use to identify the supersectors (Cobstruction, Education & Health Services, Financial Activities, Information, Leisure & Hospitality, Manufacturing, Natural Resources & Mining, Trade Transportation & Utilities, or Professional & Business Services). Definition of supersector is provided below.|  
| Column Name SUPERSECTOR_NAME | Data Type Varchar (100) | Column Description Name identifying the type of supersector (Cobstruction, Education & Health Services, Financial Activities, Information, Leisure & Hospitality, Manufacturing, Natural Resources & Mining, Trade Transportation & Utilities, or Professional & Business Services). Definition of supersector is provided below.   |  
| Column Name DISPLAY_LEVEL    | Data Type Varchar (2)   | Column Description A hierarchy of various levels. A proprietary nesting scheme.                                                                                                                                                                                                                                                     |  
| Column Name SELECTABLE       | Data Type Varchar(1)    | Column Description A permission to choose (T) a variable in which reasonable data is assured.                                                                                                                                                                                                                                       |  
| Column Name SORT_SEQUENCE    | Data Type Varchar (5)   | Column Description Order in which variables are displayed.                                                                                                                                                                                                                                                                          |  

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