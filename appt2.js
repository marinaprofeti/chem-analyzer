document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM content loaded');

    const analyzeButton = document.getElementById('analyzeButton');
    const chemicalInput = document.getElementById('chemicalInput');
    const resultContainer = document.getElementById('resultContainer');

    analyzeButton.addEventListener('click', analyzeChemical);
    chemicalInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            analyzeChemical();
        }
    });

    function analyzeChemical() {
    console.log('Analyzing chemical...');
    const enteredText = chemicalInput.value.trim();

    // Fetch information for the entered text
    getChemicalInfo(enteredText, function (chemicalInfo) {
        console.log('Chemical info received:', chemicalInfo);

        // Display the information only if it's not "N/A"
        resultContainer.innerHTML = `
            <h2>${chemicalInfo.commonName}</h2>
            ${chemicalInfo.scientificName !== 'N/A' ? `<p><strong>Scientific Name:</strong> ${chemicalInfo.scientificName}</p>` : ''}
            ${chemicalInfo.chemicalClass !== 'N/A' ? `<p><strong>Class:</strong> ${chemicalInfo.chemicalClass}</p>` : ''}
            ${chemicalInfo.formula !== 'N/A' ? `<p><strong>Formula:</strong> ${chemicalInfo.formula}</p>` : ''}
            ${chemicalInfo.description !== 'N/A' ? `<p><strong>Description:</strong> ${chemicalInfo.description}</p>` : ''}
            ${chemicalInfo.ingestible !== 'N/A' ? `<p><strong>Ingestible:</strong> ${chemicalInfo.ingestible}</p>` : ''}
            ${chemicalInfo.negativeEffectsEating !== 'N/A' ? `<p><strong>Non-lethal Negative Effects - Eating:</strong> ${chemicalInfo.negativeEffectsEating}</p>` : ''}
            ${chemicalInfo.negativeEffectsContact !== 'N/A' ? `<p><strong>Non-lethal Negative Effects - Contact:</strong> ${chemicalInfo.negativeEffectsContact}</p>` : ''}
            ${chemicalInfo.negativeEffectsEyeContact !== 'N/A' ? `<p><strong>Non-lethal Negative Effects - Eye Contact:</strong> ${chemicalInfo.negativeEffectsEyeContact}</p>` : ''}
            ${chemicalInfo.negativeEffectsInhalation !== 'N/A' ? `<p><strong>Non-lethal Negative Effects - Inhalation:</strong> ${chemicalInfo.negativeEffectsInhalation}</p>` : ''}
            ${chemicalInfo.ld50 !== 'N/A' ? `<p><strong>Ld50:</strong> ${chemicalInfo.ld50}</p>` : ''}
            ${chemicalInfo.lc50 !== 'N/A' ? `<p><strong>Lc50:</strong> ${chemicalInfo.lc50}</p>` : ''}
            ${chemicalInfo.pregnancyRisk !== 'N/A' ? `<p><strong>Pregnancy Risk:</strong> ${chemicalInfo.pregnancyRisk}</p>` : ''}
            ${chemicalInfo.additionalRiskForChildren !== 'N/A' ? `<p><strong>Additional Risk for Children:</strong> ${chemicalInfo.additionalRiskForChildren}</p>` : ''}
            ${chemicalInfo.carcinogen !== 'N/A' ? `<p><strong>Carcinogen:</strong> ${chemicalInfo.carcinogen}</p>` : ''}
            ${chemicalInfo.chemicalsNotToMixWith !== 'N/A' ? `<p><strong>Chemicals not to mix with:</strong> ${chemicalInfo.chemicalsNotToMixWith}</p>` : ''}
            ${chemicalInfo.allergy !== 'N/A' ? `<p><strong>Allergy:</strong> ${chemicalInfo.allergy}</p>` : ''}
            ${chemicalInfo.useRestriction !== 'N/A' ? `<p><strong>Use Restriction:</strong> ${chemicalInfo.useRestriction}</p>` : ''}
            ${chemicalInfo.neurotoxicity !== 'N/A' ? `<p><strong>Neurotoxicity:</strong> ${chemicalInfo.neurotoxicity}</p>` : ''}
            ${chemicalInfo.irritation !== 'N/A' ? `<p><strong>Irritation:</strong> ${chemicalInfo.irritation}</p>` : ''}
            ${chemicalInfo.organDisruption !== 'N/A' ? `<p><strong>Organ Disruption:</strong> ${chemicalInfo.organDisruption}</p>` : ''}
            ${chemicalInfo.otherHealthProblems !== 'N/A' ? `<p><strong>Other Negative Health Problems:</strong> ${chemicalInfo.otherHealthProblems}</p>` : ''}
            ${chemicalInfo.positiveEffects !== 'N/A' ? `<p><strong>Positive Effects on Skin, Hair, Eyes, etc.:</strong> ${chemicalInfo.positiveEffects}</p>` : ''}
            <!-- Add more properties as needed -->
        `;
    });
}
            // Display the information
            resultContainer.innerHTML = `
                <h2>${chemicalInfo.commonName}</h2>
                <p><strong>Scientific Name:</strong> ${chemicalInfo.scientificName}</p>
                <p><strong>Class:</strong> ${chemicalInfo.chemicalClass}</p>
                <p><strong>Formula:</strong> ${chemicalInfo.formula}</p>
                <p><strong>Description:</strong> ${chemicalInfo.description}</p>
                <p><strong>Ingestible:</strong> ${chemicalInfo.ingestible}</p>
                <p><strong>Non-lethal Negative Effects - Eating:</strong> ${chemicalInfo.negativeEffectsEating}</p>
                <p><strong>Non-lethal Negative Effects - Contact:</strong> ${chemicalInfo.negativeEffectsContact}</p>
                <p><strong>Non-lethal Negative Effects - Eye Contact:</strong> ${chemicalInfo.negativeEffectsEyeContact}</p>
                <p><strong>Non-lethal Negative Effects - Inhalation:</strong> ${chemicalInfo.negativeEffectsInhalation}</p>
                <p><strong>Ld50:</strong> ${chemicalInfo.ld50}</p>
                <p><strong>Lc50:</strong> ${chemicalInfo.lc50}</p>
                <p><strong>Pregnancy Risk:</strong> ${chemicalInfo.pregnancyRisk}</p>
                <p><strong>Additional Risk for Children:</strong> ${chemicalInfo.additionalRiskForChildren}</p>
                <p><strong>Carcinogen:</strong> ${chemicalInfo.carcinogen}</p>
                <p><strong>Chemicals not to mix with:</strong> ${chemicalInfo.chemicalsNotToMixWith}</p>
                <p><strong>Allergy:</strong> ${chemicalInfo.allergy}</p>
                <p><strong>Use Restriction:</strong> ${chemicalInfo.useRestriction}</p>
                <p><strong>Neurotoxicity:</strong> ${chemicalInfo.neurotoxicity}</p>
                <p><strong>Irritation:</strong> ${chemicalInfo.irritation}</p>
                <p><strong>Organ Disruption:</strong> ${chemicalInfo.organDisruption}</p>
                <p><strong>Other Negative Health Problems:</strong> ${chemicalInfo.otherHealthProblems}</p>
                <p><strong>Positive Effects on Skin, Hair, Eyes, etc.:</strong> ${chemicalInfo.positiveEffects}</p>
                <!-- Add more properties as needed -->
            `;
        });

    function getChemicalInfo(enteredText, callback) {
        // Replace this static data with your dynamic data or database queries
        const chemicalInfoMap = {
            "water": {
                commonName: "Water",
                scientificName: "Dihydrogen monoxide",
                chemicalClass: "Solvent",
                formula: "H₂O",
                description: "Essential for life; acts as a solvent, medium for chemical reactions, regulates temperature, supports ecosystems.",
                ingestible: "Yes",
                negativeEffectsEating: "Overhydration: Drinking excessive amounts can lead to electrolyte imbalance. Recommended daily intake varies.",
                negativeEffectsContact: "Prolonged exposure may lead to dry skin, but generally safe.",
                negativeEffectsEyeContact: "Eye irritation; flushing with water is typically sufficient.",
                negativeEffectsInhalation: "Inhalation of mist or vapor in high concentrations may cause coughing or shortness of breath.",
                ld50: "N/A",
                lc50: "N/A",
                pregnancyRisk: "N/A",
                additionalRiskForChildren: "N/A",
                carcinogen: "N/A",
                chemicalsNotToMixWith: "Generally safe, but avoid mixing with reactive metals like sodium.",
                allergy: "No known allergy",
                useRestriction: "No restriction",
                neurotoxicity: "Not neurotoxic",
                irritation: "Generally non-irritating, but excessive exposure may cause irritation.",
                organDisruption: "N/A",
                otherHealthProblems: "Excessive water intake can lead to hyponatremia (low sodium levels).",
                positiveEffects: "Hydration is beneficial for skin health, hair, and overall well-being."
                // Add more properties as needed
            },
            "cetearyl alcohol": {
                commonName: "Cetearyl Alcohol",
                scientificName: "Cetyl/Stearyl Alcohol, Cetostearyl Alcohol",
                chemicalClass: "Fatty Alcohol",
                formula: "N/A",
                description: "A mixture of fatty alcohols, primarily Cetyl Alcohol and Stearyl Alcohol; used as an emollient, emulsifier, and thickener in cosmetics.",
                ingestible: "Generally considered safe in small quantities; large amounts may cause digestive discomfort.",
                negativeEffectsContact: "Generally safe; may cause irritation in some individuals, but uncommon.",
                negativeEffectsEyeContact: "Eye irritation may occur; flush with water if contact occurs.",
                negativeEffectsInhalation: "N/A",
                ld50: "Not readily available; typically considered low toxicity when used as intended in cosmetic products.",
                lc50: "N/A",
                pregnancyRisk: "No specific additional risks known for pregnant women",
                additionalRiskForChildren: "Generally safe for children when used in cosmetics; consult product labels for age-specific recommendations.",
                carcinogen: "No known cancer risk associated with Cetearyl Alcohol.",
                chemicalsNotToMixWith: "Generally compatible with other cosmetic ingredients; specific formulations may vary.",
                allergy: "Rare allergic reactions may occur, but Cetearyl Alcohol is considered well-tolerated for most people.",
                useRestriction: "Commonly used in cosmetics, skincare, and hair care products.",
                neurotoxicity: "Not known to be neurotoxic.",
                irritation: "May cause irritation in individuals with sensitive skin, but generally considered mild.",
                organDisruption: "No known organ disruption associated with normal use in cosmetics.",
                otherHealthProblems: "Excessive use may lead to skin irritation; otherwise, generally considered safe in cosmetic formulations.",
                positiveEffects: "Acts as an emollient, providing moisturizing properties to skin and hair.",
                otherNames: ["Cetyl/Stearyl Alcohol", "Cetostearyl Alcohol"]  // Add other names here
                // Add more properties as needed
            },
"Glycerin": {
                commonName: "Glycerin",
                scientificName: "Glycerin",
                chemicalClass: "Fatty Alcohol",
                formula: "C₃H₈O₃",
                description: "A colorless, odorless, sweet-tasting liquid; used in cosmetics, pharmaceuticals, and food as a humectant.",
                ingestible: "Generally safe in small quantities; excessive intake may lead to digestive discomfort.",
                negativeEffectsContact: "Generally safe; may cause irritation in rare cases, but commonly used in skincare products.",
                negativeEffectsEyeContact: "Eye irritation may occur; flush with water if contact occurs.",
                negativeEffectsInhalation: "N/A",
                ld50: "Not readily available; considered low toxicity when used as intended.",
                lc50: "N/A",
                pregnancyRisk: "Generally safe for pregnant women when used in recommended amounts.",
                additionalRiskForChildren: "Generally safe for children; consult product labels for age-specific recommendations.",
                carcinogen: "No known cancer risk associated with Glycerin.",
                chemicalsNotToMixWith: "Generally compatible with a wide range of substances; may enhance penetration of other chemicals through the skin.",
                allergy: "Rare allergic reactions may occur, but Glycerin is well-tolerated by most people.",
                useRestriction: "Commonly used in cosmetics, skincare, pharmaceuticals, and food products.",
                neurotoxicity: "Not known to be neurotoxic.",
                irritation: "Generally non-irritating, but rare cases of irritation may occur in individuals with hypersensitive skin.",
                organDisruption: "No known organ disruption associated with normal use.",
                otherHealthProblems: "Excessive use may lead to skin irritation; otherwise, considered safe when used as directed.",
                positiveEffects: "Acts as a humectant, attracting and retaining moisture; beneficial for skin hydration.",
                otherNames: ["Glycerol", "Glycerin"]  // Add other names here
                // Add more properties as needed
            },
"Cocos nucifera oil": {
                commonName: "Coconut oil",
                scientificName: "Cocos nucifera oil",
                chemicalClass: "Fatty Alcohol",
                formula: "N/A",
                description: "Extracted from the kernel or meat of mature coconuts; used in cooking, skincare, haircare, and as a carrier oil.",
                ingestible: "Generally safe when consumed in moderation; high intake may contribute to high cholesterol levels.",
                negativeEffectsContact: "Generally safe for most individuals; may cause skin reactions in rare cases.",
                negativeEffectsEyeContact: "Eye irritation may occur; flush with water if contact occurs.",
                negativeEffectsInhalation: "N/A",
                ld50: "N/A",
                lc50: "N/A",
                pregnancyRisk: "Generally safe for pregnant women when used in recommended amounts.",
                additionalRiskForChildren: "Generally safe for children; use age-appropriate amounts.",
                carcinogen: "No known cancer risk associated with Coconut Oil.",
                chemicalsNotToMixWith: "Generally compatible with other oils and cosmetic ingredients; formulations may vary.",
                allergy: "Rare allergic reactions may occur, but Coconut Oil is well-tolerated by most people.",
                useRestriction: "Commonly used in cooking, skincare, haircare, and as a carrier oil.",
                neurotoxicity: "Not known to be neurotoxic.",
                irritation: "Generally well-tolerated, but individuals with sensitive skin may experience mild irritation.",
                organDisruption: "No known organ disruption associated with normal use.",
                otherHealthProblems: "High in saturated fats, so excessive consumption may contribute to cardiovascular issues.",
                positiveEffects: "Moisturizing and nourishing for skin and hair; often used in cosmetics for its emollient properties.",
                otherNames: ["Coconut Oil", "Cocos nucifera oil", "Cocoanut oil"]  // Add other names here
                // Add more properties as needed
            },
            // Add more chemicals as needed
        };

        // Try to find the chemical using the entered text
        let chemicalInfo = findChemical(chemicalInfoMap, enteredText);

        // Default information if the chemical is not found
        const defaultInfo = {
            commonName: "Unknown",
            scientificName: "Unknown",
            chemicalClass: "Unknown",
            formula: "Unknown",
            description: "No information available for this chemical.",
            ingestible: "Unknown",
            negativeEffectsEating: "Unknown",
            negativeEffectsContact: "Unknown",
            negativeEffectsEyeContact: "Unknown",
            negativeEffectsInhalation: "Unknown",
            ld50: "Unknown",
            lc50: "Unknown",
            pregnancyRisk: "Unknown",
            additionalRiskForChildren: "Unknown",
            carcinogen: "Unknown",
            chemicalsNotToMixWith: "Unknown",
            allergy: "Unknown",
            useRestriction: "Unknown",
            neurotoxicity: "Unknown",
            irritation: "Unknown",
            organDisruption: "Unknown",
            otherHealthProblems: "Unknown",
            positiveEffects: "Unknown"
            // Add more properties as needed
        };

        // Return the information for the chemical or default information
        callback(chemicalInfo || defaultInfo);
    }

    function findChemical(chemicalInfoMap, enteredText) {
        enteredText = normalizeText(enteredText);

        // Check for "N/A" (case-insensitive)
if (enteredText.toLowerCase() === 'n/a') {
    return { commonName: 'Unknown' };
}


        // Try to find the chemical using the entered text in any of the fields
        for (const key in chemicalInfoMap) {
            const chemical = chemicalInfoMap[key];

            // Check common name, scientific name, formula, and other names
            if (
                normalizeText(chemical.commonName) === enteredText ||
                normalizeText(chemical.scientificName) === enteredText ||
                normalizeText(chemical.formula) === enteredText ||
                (chemical.otherNames && chemical.otherNames.some(name => normalizeText(name) === enteredText))
            ) {
                return chemical;
            }
        }

        return null; // Return null if not found
    }

    function normalizeText(text) {
        // Replace specific subscripts with their corresponding characters
        const subscriptMap = {
            '₀': '0',
            '₁': '1',
            '₂': '2',
            '₃': '3',
            '₄': '4',
            '₅': '5',
            '₆': '6',
            '₇': '7',
            '₈': '8',
            '₉': '9'
        };

        // Replace subscripts with corresponding characters
        text = text.replace(/[_₀-₉]/g, match => subscriptMap[match] || match);

        // Remove other non-alphanumeric characters and convert to lowercase
        return text.replace(/[\W_]/g, '').toLowerCase();
    }