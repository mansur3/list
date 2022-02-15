
import './App.css';
import {useState, useEffect} from "react";

function App() {
  // Global variable
const [name, setName] = useState("Alltogether company");
const [business_idea, setBusiness_idea] = useState("Electronic repair and Auto mobile repairs")

//Sgate of busines

const [business_stage, setBusiness_stage] = useState("")


//Age of establishment(years);

const [age_of_establishment, setAgeOfEstablishment] = useState(0);
// console.log(age_of_establishment);


//Primary products/services offered and offered to


const [primary_product_service_offered, setPrimaryProduct_service] = useState("");
const [offered_to, setOfferedTo] = useState("");



//Secondary products/services offered

const [secondary_product_service_offered, setSecondaryProductService] = useState(null);

//Processed products/services
const [processed_products, setProcessedProduct] = useState(null);


//Relevant exprience
const [relevant_experience, setRelevantExperience] = useState(0);


//Skil training
const [skill_training, setSkillTraining] = useState("No formal skill training")



//UsP

const [usp, setUsp] = useState([])
const handleUsp = (e) => {
  const {value, checked}  = e.target;
  if(checked) {
    setUsp([...usp, value])
  } else {
    setUsp(usp.filter((e) => e !== value))
  }
}






//Location

//Establioshment type, name of the area , Locality of business, Ownership of infrustructure

const [establishment_type, setEstablishmentType] = useState("");
const [business_area, setBusinessArea] = useState("");
const [business_locality, setBusinessLocality] = useState("");
const [infra_ownership, setInfraOwnership] = useState("");



//Establishment area
const [establishment_area, setEstablishmentArea] = useState(0)


//Reasons for location
const [reason_for_location, setReasonForLocation] = useState([]);
const handleReason = (e) => {
  const {value, checked} = e.target;
  if(checked) {
    setReasonForLocation([...reason_for_location, value])
  } else {
    setReasonForLocation(reason_for_location.filter((e) => e !== value))
  }
}




//Market research
const [market_research, setMarketResearch] = useState("Not conducted")


//Primary market 
const [primary_market, setPrimaryMarket] = useState("");

//customers
const [customers, setCustomers] = useState("");


//seasonality
const [seasonality, setSeasonality] = useState("")


//competition
const [competition, setCompetition] = useState("");


//Suppliers
const [suppliers, setSuppliers] = useState("");



//Marketing avenuesa
const [marketing_avenues, setMarketing] = useState([]);
const handleAvenue = (e) => {
  const {checked, value} = e.target;
  if(checked) {
    setMarketing([...marketing_avenues, value])
  } else {
    setMarketing(marketing_avenues.filter((e) => e !== value))
  }
}

//Handle scaleup
const [scaleup_potential, setScaleupPotential] = useState([]);

const handleScaleup = (e) => {
  const {checked, value} = e.target;
  if(checked) {
    setScaleupPotential([...scaleup_potential, value])
  } else {
    setScaleupPotential(scaleup_potential.filter((e) => e !== value))
  }
}

  return (
    <div className="App">
      {/* form comtainer */}
     <div className = "formContainer">


       {/* Start introduction */}
       <div className = "introduction">
         <legend>Introduction</legend>
              <div>
                  <div className = "business_stage">
                    
                    <label>Stage of business:- </label>
                    <select onChange = {(e) => setBusiness_stage(e.target.value)}>
                      <option value = "Start-up">Start-up</option>
                      <option value = "Scale-up">Scale-up</option>
                    </select>
                  </div>
                  <div className = "business_stage_show">
                    <p> {name} is looking to {business_stage} of {business_idea}</p>
                  </div>
              </div>




              <div>
                <div className = "age_of_establishment">
                  <label>Age of establishment(years):- </label>
                  <input type = "number" min = "0" max = "100" onChange = {(e) => setAgeOfEstablishment(e.target.value)} value = {age_of_establishment} />

                </div>
                <div className = "age_of_establishment_show">
                  {
                    age_of_establishment !== 0 ? (
                      <p>This enterprise has been operational since {age_of_establishment} years and has been serving its customers since then.</p>
                    ) : ("")
                  }
                </div>
              </div>

                <div>
                  <div>
                    <div className = "primary_product_service_offered">
                      <label>
                        Primary Products/Services offered:- 
                      </label><br />
                      <input value = {primary_product_service_offered} onChange = {(e) => setPrimaryProduct_service(e.target.value)} type  = "text" />

                    </div>


                    <div className = "offered_to">
                    <label>Offered to:- </label>
                    <select onChange = {(e) => setOfferedTo(e.target.value)}>
                      <option value = "End customers">End Customers</option>
                      <option value = "Wholesalers">Wholesalers</option>
                      <option value = "Distributors">Distributors</option>
                      <option value = "Retailers">Retailers</option>
                    </select>
                    </div>
                    </div>
                    <div>
                      <p>This establishment offers products/services like- {primary_product_service_offered} to {offered_to}.</p>
                    </div>
                </div>


                  <div>

                    <div className = "secondary_product_service_offered">
                    <label>
                        Secondary Products/Services offered:- 
                      </label><br />
                      <input type  = "text" value = {secondary_product_service_offered} onChange = {(e) => setSecondaryProductService(e.target.value)}/>
                    </div>
                    <div>
                      {
                        secondary_product_service_offered === null ? (
                          ""
                        ) : (
                      <p>In addition, the enterprise shall also be involved in- {secondary_product_service_offered}</p>

                        )
                      }
                    </div>
                </div>



              <div>
                <div className = "processed_products">
                <label>
                    Processed products:- 
                  </label><br />
                  <input value = {processed_products} onChange = {(e) => setProcessedProduct(e.target.value)} type  = "text" />
                </div>
                <div>
                      {
                        processed_products === null ? (
                          ""
                        ) : (
                          <p>Other products of the enterprise shall include- {processed_products}</p>
                        )
                      }
                </div>
              </div>



              <div>
                <div className = "relevant_experience">
                  <label>Years of relevant experience in this field:- </label>
                  <input value = {relevant_experience} onChange = {(e) => setRelevantExperience(e.target.value)} type = "number"/>
                </div>
                <div>
                  {
                    relevant_experience === 0 ? (
                      ""
                    ) : (
                      <p>{name} has relevant experience of {relevant_experience} years in this field.</p>
                    )
                  }
                </div>
              </div>


              <div>
                <div className = "skill_training">
                  <label>Skil training:- </label>
                  <select onChange = {(e) => setSkillTraining(e.target.value)}>
                    <option value = "No formal skill training">No formal skill training</option>
                    <option value = "Has formal skill training and certificate">Has formal skill training and certificate</option>
                  </select>
                </div>
                <div>
                  {
                    skill_training === "No formal skill training" ? (
                      ""
                    ) : (
                      <p>The entrepreneur {skill_training} in this field or work.</p>
                    )
                  }
                </div>
              </div>


              <div>
                <div className = "usp">
                  <label>Unique Selling Proposition:- </label> <br />
                  <input type = "checkbox" onChange = {(e) => handleUsp(e)} value = "the entrepreneur's experience in this field" /> <label>The entrepreneur's experience in this field.</label><br />
                  <input type = "checkbox" onChange = {(e) => handleUsp(e)} value = "innovative product/service" /><label>innovative product/service.</label><br />
                  <input type = "checkbox" onChange = {(e) => handleUsp(e)} value = "high profit margin" /><label>High profit margin</label> <br />
                  <input type = "checkbox" onChange = {(e) => handleUsp(e)} value = "high growth potential" /> <label>High growth potential</label><br />
                  <input type = "checkbox" onChange = {(e) => handleUsp(e)} value = "superior customer support" /><label>Superior customer support</label><br />
                  <input type = "checkbox" onChange = {(e) => handleUsp(e)} value = "quality and affordable products/service" /><label>Quality and affordable products/service</label><br />
                  <input type = "checkbox" onChange = {(e) => handleUsp(e)} value = "high demand in the target market (forward linkage)" /> <label>High demand in the target market (forward linkage).</label><br />
                  <input type = "checkbox" onChange = {(e) => handleUsp(e)} value = "abundant supply of raw materials (backward linkage)" /> <label>Abundant supply of raw materials (backward linkage).</label><br />
                  <input type = "checkbox" onChange = {(e) => handleUsp(e)} value = "wide range of products/services" /> <label>Wide range of products/services.</label><br />
                  <input type = "checkbox" onChange = {(e) => handleUsp(e)} value = "robust value-chain of the business" /> <label>robust value-chain of the business</label><br />
                  <input type = "checkbox" onChange = {(e) => handleUsp(e)} value = "frequencyy of customer visits" /> <label>Frequency of customer visits</label><br />

                </div>
                <div>
                  <p>The enterprise is uniquely positioned because of it's - 
                    {
                      usp.join(", ")
                    }
                  </p>
                </div>
              </div>
        </div>
        {/* End introduction */}
                    <br /><br />
        {/* Start Location */}
        <div className = "Location">
         <legend>Location</legend>

            <div>
              <div>
                <div className = "establishment_type">
                  <label>Establishment type:- </label>
                  <select onChange = {(e) =>setEstablishmentType(e.target.value)}>
                    <option value = "Factory">Factory</option>
                    <option value = "Mill">Mill</option>
                    <option value = "Stall">Stall</option>
                    <option value = "Workshop">Workshop</option>
                    <option value = "Boutique">Boutique</option>
                    <option value = "Vehicle">Vehicle</option>
                    <option value = "Centre">Centre</option>
                    <option value = "Store">Store</option>
                    <option value = "Farm">Farm</option>
                    <option value = "Plant">Plant</option>
                    <option value = "Processing Unit">Processing Unit</option>
                    <option value = "Shop">Shop</option>
                    <option value = "Vending cart">Vending cart</option>
                    <option value = "Manufacturing unit">Manufacturing unit</option>
                  </select>
                </div>
                <div className = "business_area">
                  <label>Name of the area:- </label><br />
                  <input value = {business_area} onChange = {(e) => setBusinessArea(e.target.value)} type = "text" />
                </div>
                <div className = "business_locality">
                  <label>Locality of business:- </label>
                  <select onChange = {(e) => setBusinessLocality(e.target.value)}>
                    <option value = "Urban">Urban</option>
                    <option value = "Rural">Rural</option>
                    <option value = "Semi-urban">Semi-urban</option>
                    <option value = "Slum">Slum</option>
                    </select>
                </div>
                <div className = "infra_ownership">
                  <label>Ownership of infrastructure:-  </label>
                  <select onChange = {(e) => setInfraOwnership(e.target.value)}>
                    <option value = "Rented">
                      Rented
                    </option>
                    <option value = "Leased">
                      Leased
                    </option>
                    <option value = "Self-owned">
                      Self-owned
                    </option>
                  </select>

                </div>
              </div>
              <div>
                    <p>The {establishment_type} is located in {business_locality} area of {business_area} in a {infra_ownership} property.</p>
              </div>
            </div>


            <div>
              <div className = "establishment_area">
                <label>Establishment area :- </label>
                <input value = {establishment_area} onChange = {(e) => setEstablishmentArea(e.target.value)} type = "number" />
              </div>
              <div>
                  {
                    establishment_area === 0 ? (
                      ""
                    ) : (
                      <p>The size of the establllishment is {establishment_area} sq.ft.</p>
                    )
                  }
              </div>
            </div>

            <div>
              <div className = "reason_for_location">
                <label>Reason for selecting this location :- </label> <br />
                <input type = "checkbox" onChange = {(e) => handleReason(e)} value = "Nearness to market" /> <label>Nearness to market</label><br />
                <input type = "checkbox" onChange = {(e) => handleReason(e)} value = "Good footfall" /> <label>Good footfall.</label><br />
                <input type = "checkbox" onChange = {(e) => handleReason(e)} value = "Nearness to source of raw materials" /><label>Nearness to source of raw materials.</label> <br />
                <input type = "checkbox" onChange = {(e) => handleReason(e)} value = "Nearness to targeted customer demographics" /><label>Nearness to targeted customer demographics.</label><br />
                <input type = "checkbox" onChange = {(e) => handleReason(e)} value = "Lesser competition around" /><label>Lesser competition around</label><br />
                <input type = "checkbox" onChange = {(e) => handleReason(e)} value = "Access to permit/license of operate" /> <label>Access to permite/license of operate</label><br />
                <input type = "checkbox" onChange = {(e) => handleReason(e)} value = "Nearness to suppliers" /><label>Nearness to suppliers.</label><br />
                <input type = "checkbox" onChange = {(e) => handleReason(e)} value = "Affordability (rent)" /><label>Affordability (rent).</label><br />
                <input type = "checkbox" onChange = {(e) => handleReason(e)} value = "No rental overheads" /><label>No rental overheads.</label><br />
                <input type = "checkbox" onChange = {(e) => handleReason(e)} value = "Other such factors" /> <label>Other such factors.</label>

              </div>
              <div>
                <p>
                  This locality is selected because of :- 
                    {
                      reason_for_location.join(", ")
                    }
                </p>
              </div>
            </div>
        </div>
        {/* End Location */}


<br /><br />


          {/* Target market */}
        <div className = "market">
          <legend>Target Market</legend>
          <div>
            <div className = "market_research">
              <label>Market research:- </label>
              <select onChange = {(e) => setMarketResearch(e.target.value)}>
                <option value = "Not conducted">Not conducted</option>
                <option value = "Market research has been conducted">Market research has been conducted</option>
              </select>
            </div>
            <div>
                    {
                      market_research === "Not conducted" ? (
                        ""
                      ) : (
                        <p>
                          {market_research} and the range of products and target market has een identified after that.
                        </p>
                      )
                    }
            </div>
          </div>


          <div>
            <div className = "primary_market">
              <label>Primary market:- </label>
              <select onChange = {(e) => setPrimaryMarket(e.target.value)}>
                <option value = "Local">Local</option>
                <option value = "Regional">Regional</option>
                <option value = "National">National</option>
                <option value = "International">International</option>
              </select>
            </div>
            <div>
                    <p>
                      The enterprise shall focus on offering it's products/services to {primary_market} markets.
                    </p>
            </div>
          </div>



          <div>
            <div className = "customers">
              <label>Customers :- </label><br />
              <input value = {customers} onChange = {(e) => setCustomers(e.target.value)} type = "text" />
            </div>
            <div>
                    <p>
                      Our costumers shall include- {customers}
                    </p>
            </div>
          </div>

          <div>
            <div className = "seasonality">
              <label>Seasons of high sales :- </label>
              <select onChange = {(e) => setSeasonality(e.target.value)}>
                <option value = "Consistent sales across all seasons">Consistent sales across all seasons.</option>
                <option value = "Higher sales in festive seasons">Higher sales in festive seasons</option>
                <option value = "High sales in cropping/cultivation season">High sales in cropping/cultivation season.</option>
                <option value = "High sales in peak seasons">High sales in peak seasons</option>
              </select>
            </div>
            <div>
              <p>
                The nature of the business is such that we expect {seasonality}.
              </p>
            </div>
          </div>

          <div>
            <div className = "competition">
              <label>Competition:- </label>
              <select onChange = {(e) => setCompetition(e.target.value)}>
                <option value = "No similar goods/service provider in this locality">No similar goods/service provider in this locality.</option>
                <option value = "Only a few similar goods/service providers in this locality">Only a few similar goods/service providers in this locality.</option>
                <option value = "Many similar goods/service providers in this locality">Many similar goods/service providers in this locality.</option>
              </select>
            </div>
            <div>
                    <p>
                      Regarding competiton , there are {competition}.
                    </p>
            </div>
          </div>
        
          <div>
            <div className = "suppliers">
              <label>List of Suppliers:- </label><br />
              <input value = {suppliers} onChange = {(e) => setSuppliers(e.target.value)}type = "text" />
            </div>
            <div>
              <p>
                The enterprise shall procure goods/raw materisls from {suppliers}.
              </p>
            </div>
          </div>

          <div>
            <div className = "marketing_avenues">
              <label>Marketing avenues:- </label><br />
              <input type = "checkbox" onChange = {(e) => handleAvenue(e)} value = "distribution of marketing material (pamphlets/flyers)" /> <label>Distribution of marketing material(pamphelets/flyers).</label><br />
              <input type = "checkbox" onChange = {(e) => handleAvenue(e)} value = "storefront/business branding" /> <label>storefront/business branding</label><br />
              <input type = "checkbox" onChange = {(e) => handleAvenue(e)} value = "Seasonal discounts and offers" /> <label>Seasonal discounts and offers.</label><br />
              <input type = "checkbox" onChange = {(e) => handleAvenue(e)} value = "Cross-promotion" /><label>cross-promotion</label><br />
              <input type = "checkbox" onChange = {(e) => handleAvenue(e)} value = "Digital Marketing" /><label>Digital Marketing</label><br />
              <input type = "checkbox" onChange = {(e) => handleAvenue(e)} value = "Word of mouth" /><label>Word of Mouth</label>
            </div>
            <div>
              <p>Our marketing avenues to reach the targeted customers shall inclde - {marketing_avenues.join(", ")}</p>
            </div>
          </div>

          <div>
            <div className = "scaleup_potential">
              <label>Avenues of scaling up in the future:- </label><br />
              <input type = "checkbox" onChange = {(e) => handleScaleup(e)} value = "increasing the variety of product/service offering" /> <label>increasing the variety of product/service offering</label><br />
              <input type = "checkbox" onChange = {(e) => handleScaleup(e)} value = "expanding the current offering to other geographies" /> <label>expanding the current offering to other geographies</label><br />
              <input type = "checkbox" onChange = {(e) => handleScaleup(e)} value = "opening more outlets" /> <label>opening more outlets</label><br />
              <input type = "checkbox" onChange = {(e) => handleScaleup(e)} value = "growing the scale of operation" /> <label>growing the scale of operation</label><br />
                <input type = "checkbox" onChange = {(e) => handleScaleup(e)} value = "building value-chain integrations" /> <label>building value-chain integrations</label><br />
                <input type = "checkbox" onChange = {(e) => handleScaleup(e)} value = "other allied revenue streams" /> <label>other allied revenue streams.</label>
            </div>
            <div>
                    <p>
                      The various forseeable avenues of scaling up and growing the business in the foreseeable future include- {scaleup_potential.join(", ")}.
                    </p>
            </div>
          </div>
        </div>
        {/* End of Target market */}
     </div>
     <div className = "showData"></div>
    </div>
  );
}

export default App;
