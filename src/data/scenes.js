const scenes = {
    start: {
        title: "A. THE BEGINNING - Childhood & Early Influences",
        year: "1861-1872 - Calamba, Laguna",
        story: "You are Jose Rizal, born June 19, 1861, to Francisco Mercado Rizal and Teodora Alonso Realonda in Calamba, Laguna. Your mother, an educated woman, taught you to read at age 3 using Spanish fairy tales and religious texts. Now at 11 years old (1872), you witness a pivotal moment: the execution of three Filipino priests—Mariano Gomez (85 years old), Jose Burgos (35), and Jacinto Zamora (37)—collectively known as GOMBURZA. They were garroted at Bagumbayan Field, accused of leading the Cavite Mutiny.",
        context: "The GOMBURZA execution was Spain's attempt to silence the Filipino secular clergy movement. These priests advocated for 'Filipinization' of Philippine parishes, challenging Spanish friars' monopoly. Their execution was judicial murder—they were innocent scapegoats. This event radicalized the ilustrado class (educated Filipinos) including your brother Paciano, who was a student of Fr. Burgos. Your family's wealth came from leasing a friar-owned hacienda, giving you rare educational opportunities denied to 99% of Filipinos. Your family motto: 'He who does not look back at where he came from will never reach his destination.'",
        additionalInfo: "Historical Context: In 1872, Spain ruled the Philippines for 300+ years through the friar orders (Augustinians, Franciscans, Dominicans, Jesuits, Recollects). These friars controlled land, education, and local governance. The Cavite Mutiny—200 Filipino soldiers protesting pay cuts—was used as pretext to execute Filipino clergy and intellectuals threatening Spanish power. Young Rizal's mother was imprisoned (1871-1874) on false charges, teaching him early about Spanish injustice. His family was wealthy but persecuted, showing that no Filipino was truly safe under colonial rule.",
        question: "How will you respond to this injustice that has shaped your childhood?",
        choices: [
            { id: 'd1_violence', text: "🗡️ Join or support armed rebellion immediately", outcome: "violent", icon: "⚔️" },
            { id: 'd1_comfort', text: "😔 Accept colonial rule and live comfortably", outcome: "passive", icon: "🏠" },
            { id: 'd1_education', text: "📚 Pursue education to understand and fight injustice intellectually", outcome: "reform", icon: "📖" }
        ]
    },
    
    d1_violence: {
        title: "ENDING: Youthful Rebellion",
        year: "1872-1875",
        story: "You join underground resistance movements as a teenager. Without education or strategic planning, your group is quickly discovered. Spanish authorities arrest you and your family. Your promising life ends in prison at age 14.",
        context: "Without intellectual preparation or popular support, premature violence often led to harsh crackdowns by Spanish authorities. The GOMBURZA martyrdom (Element A) should have taught you that hasty action without preparation leads to tragedy.",
        impact: "Your sacrifice is forgotten. The Philippines remains under Spanish rule for decades. Without intellectual foundation or written works (Elements B, D, E), revolutionary movements lack direction.",
        rubricElements: [
            { element: "A", covered: true, note: "Witnessed GOMBURZA but misunderstood the lesson" },
            { element: "B-H", covered: false, note: "Never achieved due to premature action" }
        ],
        detailedAnalysis: "By choosing immediate violence, you missed the opportunity to develop the intellectual and moral foundation necessary for true reform. Rizal's actual path involved years of education (Element B), literary works exposing colonial abuse (Elements D, E), and building civic organizations (Element G) before any revolutionary action.",
        isEnding: true,
        endingType: "bad"
    },

    d1_comfort: {
        title: "ENDING: The Ilustrado's Comfort",
        year: "1872-1896",
        story: "You choose the easy path, living off your family's wealth and accepting Spanish rule. You become a successful doctor in Manila but remain silent on injustices. When the revolution comes in 1896, you are seen as a collaborator.",
        context: "Many wealthy Filipinos chose comfort over confrontation, perpetuating the colonial system. The GOMBURZA execution (Element A) failed to inspire you to action, showing how privilege can blind one to injustice.",
        impact: "You live comfortably but die without purpose. Your name is forgotten by history. You never wrote 'A La Juventud Filipina' (Element C) to inspire youth, never created novels (Elements D, E), never advocated for women's education (Element F), never organized reform movements (Element G), and your final moments lack the heroic sacrifice that could have inspired a nation (Element H).",
        rubricElements: [
            { element: "A", covered: true, note: "Witnessed GOMBURZA but chose inaction" },
            { element: "B-H", covered: false, note: "All opportunities wasted through complacency" }
        ],
        detailedAnalysis: "Comfort and privilege without purpose leads to a wasted life. Rizal could have lived safely as a doctor, but he chose to risk everything for his country. This ending represents the path not taken—a life of material success but spiritual emptiness and historical irrelevance.",
        isEnding: true,
        endingType: "bad"
    },

    d1_education: {
        title: "B. ATENEO & UNIVERSITY OF SANTO TOMAS - The Scholar's Path",
        year: "1872-1882 - Manila",
        story: "At age 11, you enter Ateneo Municipal de Manila (run by Jesuits) using the surname 'Rizal' instead of 'Mercado' to distance yourself from your brother Paciano's revolutionary connections. You excel dramatically: winning poetry competitions at 14, graduating with honors (sobresaliente) in 1877. You wrote 'Sa Aking mga Kababata' (To My Fellow Youth) celebrating Tagalog language. At 16, you enter Universidad de Santo Tomas to study medicine and philosophy. But Dominican friars openly discriminate—refusing to teach Filipinos advanced topics, mocking your abilities, denying you laboratory access. Despite earning top marks, you're treated as inferior. The hypocrisy is maddening: Spain claims to 'civilize' Filipinos while preventing education.",
        context: "Spanish colonial education was designed to create obedient subjects, not critical thinkers. Friars taught in Spanish (which most Filipinos didn't speak) and focused on Catholic doctrine over science. The best Filipino students faced a glass ceiling—no matter how brilliant, they couldn't advance in colonial society. This created the ilustrado class: educated Filipinos aware of European Enlightenment ideas (liberty, equality, human rights) but denied those same rights at home. Your poem 'Sa Aking mga Kababata' argued that language is key to national identity: 'He who does not love his native language is worse than a beast and a putrid fish.' This was radical—Spanish authorities wanted Filipinos to forget their languages.",
        additionalInfo: "Academic Achievements: You mastered 22 languages (Spanish, Tagalog, Latin, Greek, English, French, German, Italian, Japanese, Chinese, Arabic, Sanskrit, Hebrew, Catalan, Dutch, Swedish, Russian, Portuguese, Malayan, and more). You studied painting, sculpture, poetry, drama, and science. You were a polymath—doctor, novelist, artist, historian, linguist, anthropologist. At UST, you discovered European scientific journals showing that Filipinos were intellectually equal to Europeans—contradicting racist Spanish propaganda. This knowledge radicalized you: Spain lied about Filipino inferiority to justify colonialism.",
        question: "Your Philippines education is complete, but you've hit the colonial ceiling. What's your next move?",
        choices: [
            { id: 'd2_stay', text: "🏥 Practice medicine in Manila and live quietly", outcome: "safe", icon: "🩺" },
            { id: 'd2_quit', text: "😤 Give up—the system is too oppressive", outcome: "defeated", icon: "🚪" },
            { id: 'd2_europe', text: "✈️ Study abroad in Europe to gain more knowledge", outcome: "growth", icon: "🌍" }
        ]
    },

    d2_stay: {
        title: "ENDING: The Safe Doctor",
        year: "1882-1896",
        story: "You become a respected doctor in Manila but avoid controversial topics. When the revolution begins, you're caught in the middle—trusted by neither side. You're arrested as a suspected revolutionary but also rejected by true reformers as a coward.",
        context: "Neutrality in times of oppression often meant complicity. The Spanish saw all educated Filipinos as threats. You completed your education (Elements A, B) but failed to use it for national awakening.",
        impact: "You achieve personal success but fail to contribute to your nation's liberation. Without studying abroad, you never write 'Noli Me Tangere' or 'El Filibusterismo' (Elements D, E), never understand the liberal ideas that could have reformed Philippine society, and never fulfill your potential as outlined in 'A La Juventud Filipina' (Element C).",
        rubricElements: [
            { element: "A", covered: true, note: "Childhood influences present" },
            { element: "B", covered: true, note: "Completed local education" },
            { element: "C-H", covered: false, note: "Never achieved due to avoiding risks" }
        ],
        detailedAnalysis: "This ending shows the tragedy of unfulfilled potential. You had the education and opportunity but lacked the courage to risk comfort for country. Rizal's greatness came from his willingness to sacrifice personal safety for the greater good.",
        isEnding: true,
        endingType: "neutral"
    },

    d2_quit: {
        title: "ENDING: Broken Spirit",
        year: "1882",
        story: "The constant discrimination breaks your spirit. You abandon your dreams and return to Calamba to manage your family's farm. You watch from the sidelines as others fight for freedom, always wondering what could have been.",
        context: "Colonial oppression was designed to break the spirit of talented Filipinos, preventing resistance. The discrimination you faced at UST (Element B) defeated you instead of strengthening your resolve.",
        impact: "Your potential is wasted. The Philippines loses a brilliant mind. You never write poetry celebrating national language (Element B: Sa Aking mga Kababata), never call youth to intellectual endeavors (Element C), never expose colonial abuses through literature (Elements D, E), never advocate for women's rights (Element F), never organize reform movements (Element G), and die without the heroic sacrifice that inspires nations (Element H).",
        rubricElements: [
            { element: "A", covered: true, note: "Early influences present but overcome by despair" },
            { element: "B", covered: "partial", note: "Education incomplete, spirit broken" },
            { element: "C-H", covered: false, note: "All lost to broken spirit" }
        ],
        detailedAnalysis: "Resilience in the face of oppression defines true heroes. Rizal faced the same discrimination but used it as fuel for reform. This ending shows how colonial systems succeeded in breaking some spirits, preventing the emergence of nationalist leaders.",
        isEnding: true,
        endingType: "bad"
    },

    d2_europe: {
        title: "C. EUROPE - A La Juventud Filipina & The Awakening",
        year: "1882-1887 - Madrid, Paris, Berlin, Heidelberg",
        story: "May 3, 1882: You board the steamer Salvadora for Barcelona, using your brother Paciano's savings. In Madrid, you study medicine at Universidad Central. In Paris, you work under Dr. Louis de Wecker at Sorbonne. In Heidelberg, you study ophthalmology under Dr. Otto Becker. For the first time, you experience true freedom—walking streets without surveillance, debating politics openly, treated as an equal. You write 'A La Juventud Filipina' (To the Filipino Youth), winning first prize in 1879, calling Filipino youth to 'break the chains' through education and creativity. You join the Propaganda Movement with Marcelo H. del Pilar, Graciano Lopez Jaena, and other expatriate reformers. You witness democratic societies where citizens have rights, governments serve the people, and merit matters more than race.",
        context: "European exposure shattered Spanish propaganda. You discovered that Spain itself was backward compared to France, Germany, and England. These countries had constitutional monarchies, free press, public education, and civil rights—everything Spain denied Filipinos. You met liberal Spaniards who supported Philippine reforms, proving not all Spaniards were oppressors. You studied under world-renowned professors who treated you as an intellectual peer. European universities taught real science and philosophy, not religious dogma. This radicalized the Propaganda Movement: if Filipinos excelled in European universities, Spanish claims of inferiority were lies used to justify exploitation.",
        additionalInfo: "The Propaganda Movement (1880-1895): Expatriate Filipinos in Spain advocating reforms through their newspaper 'La Solidaridad.' Their demands: representation in Spanish Cortes (parliament), secular education, freedom of speech/assembly, equality before law, Filipinization of parishes. They believed peaceful reform was possible if Spain knew the truth. Notable figures: Marcelo H. del Pilar (brilliant propagandist), Graciano Lopez Jaena (orator), Antonio Luna (chemist/military strategist), Mariano Ponce (journalist). Funding came from wealthy ilustrado families. The movement ultimately failed because Spain had no intention of reform—the friars were too powerful, and colonial profits too lucrative. This failure convinced later revolutionaries that independence required armed struggle.",
        question: "You've seen how civilization should work. How will you wake up the Philippines to demand these rights?",
        choices: [
            { id: 'd3_armed', text: "⚔️ Return home and organize armed resistance", outcome: "revolutionary", icon: "🔫" },
            { id: 'd3_lobby', text: "📜 Stay in Europe and lobby Spanish parliament", outcome: "political", icon: "🏛️" },
            { id: 'd3_write', text: "✍️ Write a novel exposing colonial abuses", outcome: "intellectual", icon: "📝" }
        ]
    },

    d3_armed: {
        title: "ENDING: Premature Revolution",
        year: "1887-1888",
        story: "You return to the Philippines and attempt to organize an armed uprising. Without popular support, ideological preparation, or resources, your movement fails quickly. You're executed alongside your co-conspirators.",
        context: "The Propaganda Movement believed Filipinos needed 'moral preparation' before revolution. Armed struggle without this was doomed. Element E (El Filibusterismo) would have explained through Father Florentino that revolution requires necessary preconditions.",
        impact: "Your death achieves nothing. Spain tightens its grip. Without Elements E-H, the revolution has no foundation.",
        rubricElements: [
            { element: "A-C", covered: true, note: "Foundation established" },
            { element: "D-H", covered: false, note: "Premature action prevented completion" }
        ],
        detailedAnalysis: "Armed struggle before moral preparation was Rizal's greatest fear. You wrote Noli but rushed to action before explaining revolutionary theory in El Filibusterismo.",
        isEnding: true,
        endingType: "bad"
    },

    d3_lobby: {
        title: "ENDING: The Eternal Lobbyist",
        year: "1887-1898",
        story: "You spend years in Madrid lobbying Spanish politicians for reforms. They make empty promises but never act. By 1898, when America defeats Spain, you're still waiting for reforms that will never come. The revolution happens without you.",
        context: "The Propaganda Movement's lobbying achieved little. Spain had no intention of granting meaningful reforms. Without writing novels (Elements D, E) to awaken Filipino consciousness, lobbying alone was powerless.",
        impact: "Your efforts are wasted on deaf ears. You never write El Filibusterismo (E), never advocate for women's education (F), never organize La Liga (G), and die without making the ultimate sacrifice (H).",
        rubricElements: [
            { element: "A-C", covered: true, note: "Foundation established but wasted" },
            { element: "D", covered: true, note: "Wrote Noli but never followed through" },
            { element: "E-H", covered: false, note: "Time wasted lobbying" }
        ],
        detailedAnalysis: "Political lobbying without popular awakening is futile. Rizal learned that Spain would never grant reforms willingly—the Filipino people needed to be awakened first through literature, education, and organization.",
        isEnding: true,
        endingType: "neutral"
    },

    d3_write: {
        title: "D. NOLI ME TANGERE (TOUCH ME NOT)",
        year: "1887",
        story: "You publish 'Noli Me Tangere,' a novel that exposes Spanish colonial abuses through the story of Crisostomo Ibarra. It becomes an instant sensation among Filipinos and enrages Spanish authorities. The book is banned, but copies circulate secretly. You've awakened national consciousness.",
        context: "'Noli Me Tangere' is considered the spark of the Philippine Revolution. It portrayed colonial society so accurately that it terrified Spanish authorities.",
        additionalInfo: "📖 Published in Berlin, Germany on March 29, 1887, after five years of writing. Dedicated to the memory of GOMBURZA. The 2,000-peso printing cost was funded by fellow Filipino expatriate Maximo Viola. Main characters: Crisostomo Ibarra (young ilustrado returning home), Maria Clara (his beloved), Padre Dámaso (corrupt friar), Elias (revolutionary figure), Sisa (abused mother driven to madness). The title comes from John 20:17, Jesus's words 'touch me not' after resurrection—symbolizing the Philippines' untouchable suffering. Spanish friars called it 'heretical,' 'impious,' and 'scandalous.' Archbishop Pedro Payo declared anyone possessing it excommunicated. Governor-General Terrero warned Rizal it endangered his life. Yet copies multiplied through secret printing, hand-copying, and translation into Tagalog and other languages. The novel's social cancer metaphor exposed: friar abuse of power, Spanish exploitation, Filipino colonial mentality, justice system corruption, education as weapon, women's oppression, and the ilustrado's moral responsibility. It asked: How can a people heal from centuries of colonial wounds?",
        question: "Spanish authorities hunt you. Your family is persecated. What now?",
        choices: [
            { id: 'd4_fight', text: "⚔️ Stay and fight—organize immediate resistance", outcome: "confrontation", icon: "🛡️" },
            { id: 'd4_flee', text: "🏃 Flee permanently to Europe or Hong Kong", outcome: "exile", icon: "✈️" },
            { id: 'd4_strategic', text: "🎯 Strategic retreat—write more, prepare the people", outcome: "preparation", icon: "📚" }
        ]
    },

    d4_fight: {
        title: "ENDING: Martyred Too Soon",
        year: "1887-1888",
        story: "You return to Manila to organize resistance. Spanish authorities arrest you immediately, using your novel as evidence of sedition. You're executed before publishing your second novel or completing your mission of moral preparation.",
        context: "Rizal believed the people weren't ready yet. Element E (El Filibusterismo) would have completed your intellectual contribution, showing the path from reform to revolution.",
        impact: "Your death is remembered, but incomplete. You never write El Fili (E), never pen the Letter to Malolos Women (F), never organize La Liga (G), and your martyrdom (H) lacks maximum impact.",
        rubricElements: [
            { element: "A-D", covered: true, note: "Strong foundation through Noli" },
            { element: "E-H", covered: false, note: "Executed before completing mission" }
        ],
        detailedAnalysis: "Timing matters in martyrdom. Dying too soon, before your work is complete, wastes potential impact. Rizal's actual death came after both novels, reform movements, and preparation—making it the catalyst, not a waste.",
        isEnding: true,
        endingType: "neutral"
    },

    d4_flee: {
        title: "ENDING: The Comfortable Exile",
        year: "1887-1896",
        story: "You settle permanently in Hong Kong, living comfortably as an ophthalmologist. You watch from afar as the Philippines burns in revolution. You feel guilt but tell yourself you've already done enough by writing your novel.",
        context: "Element D (Noli) started the awakening, but one novel isn't enough. Some expatriates chose permanent exile over continued struggle.",
        impact: "Without your second novel and leadership, the revolution lacks clarity. You never write El Fili (E), never advocate for women (F), never organize La Liga (G), and die not in heroic martyrdom (H) but comfortable cowardice.",
        rubricElements: [
            { element: "A-D", covered: true, note: "Started strong with Noli" },
            { element: "E-H", covered: false, note: "Abandoned mission for safety" }
        ],
        detailedAnalysis: "Permanent flight after one achievement is cowardice. Rizal's actual exile was forced but productive. Choosing comfort over continuing the struggle wastes your potential and betrays earlier ideals.",
        isEnding: true,
        endingType: "bad"
    },

    d4_strategic: {
        title: "E. EL FILIBUSTERISMO & TRAVELS",
        year: "1887-1891",
        story: "You travel through Europe and Asia, writing your second novel 'El Filibusterismo' (The Subversive). While your first novel showed the disease of colonialism, this one shows the violent consequences of oppression. You also document your travels, building international support.",
        context: "'El Filibusterismo' was darker and more radical, showing that reform was impossible and revolution inevitable.",
        additionalInfo: "📖 Published in Ghent, Belgium on September 18, 1891, after four years of writing. Dedicated 'To the memory of the priests Mariano Gómez, José Burgos, and Jacinto Zamora, executed in the Bagumbayan field on February 28, 1872.' Main characters: Simoun (Ibarra's dark alter ego, jeweler plotting violent revolution), Basilio (Sisa's son, now medical student), Isagani (idealistic nephew of Padre Florentino), Father Florentino (wise Filipino priest, voice of reason). The title means 'The Filibuster' or 'The Subversive'—Rizal reclaiming the Spanish insult used against reformists. Plot: Simoun returns after 13 years, bitter and bent on destroying Spanish society through terrorism, but his violent revolution fails spectacularly. Father Florentino's final message: 'What is the use of independence if the slaves of today will be the tyrants of tomorrow?' This novel was darker, showing: failed reforms lead to radicalization, violence without moral preparation brings more tyranny, revolution requires educated, virtuous people—not just anger. Spanish authorities banned it immediately, recognizing it predicted their downfall. Between novels, you traveled through Hong Kong, Japan, United States, London, Paris, Brussels—building international networks, writing for La Solidaridad, and documenting colonial injustices globally. Your annotated edition of Antonio de Morga's 'Sucesos de las Islas Filipinas' (1890) proved Filipinos had advanced civilization before Spanish arrival—destroying the 'civilizing mission' myth.",
        question: "It's 1891. Revolutionaries like Andres Bonifacio form the Katipunan. Join them now?",
        choices: [
            { id: 'd5_uprising', text: "🔥 Yes—the people are ready for immediate uprising", outcome: "hasty", icon: "⚡" },
            { id: 'd5_abandon', text: "❌ No—abandon the reform movement entirely", outcome: "resignation", icon: "🚫" },
            { id: 'd5_preparation', text: "⏰ Not yet—continue education and moral preparation", outcome: "patience", icon: "📖" }
        ]
    },

    d5_uprising: {
        title: "ENDING: The Failed Revolution",
        year: "1892-1893",
        story: "You return and join the Katipunan's premature uprising. The poorly-prepared revolt is crushed within months. Without proper training, weapons, or support, the revolutionaries are slaughtered. You're executed as a traitor.",
        context: "The actual revolution succeeded in 1896 after proper preparation. Element E (El Filibusterismo) warned through Father Florentino that revolution requires necessary preconditions: education, unity, resources, and moral readiness.",
        impact: "Your hasty decision is catastrophic. You achieve Elements A-E but waste them through impatience, never organizing La Liga (F, G) or achieving meaningful martyrdom (H).",
        rubricElements: [
            { element: "A-E", covered: true, note: "Strong intellectual foundation" },
            { element: "F-H", covered: false, note: "Wasted through premature action" }
        ],
        detailedAnalysis: "Your own novel El Filibusterismo explained why timing matters, yet you ignored its message. Father Florentino's lesson about necessary preconditions for revolution was meant to prevent exactly this tragedy.",
        isEnding: true,
        endingType: "bad"
    },

    d5_abandon: {
        title: "ENDING: The Disillusioned Reformer",
        year: "1892-1896",
        story: "Frustrated with both Spanish intransigence and Filipino unreadiness, you abandon the cause. You settle in Borneo or Hong Kong, focusing on your medical practice. When the revolution comes, your name is mentioned only as 'what might have been.'",
        context: "Some reformers withdrew from the movement. You achieved Elements A-E but abandoned the mission before organizing civic reform and inspiring the nation through sacrifice.",
        impact: "Without your continued leadership, the revolution lacks philosophical foundation. You never write the Letter to the Young Women of Malolos (F), never organize La Liga Filipina (G), and your life ends without the heroic martyrdom (H) that could have inspired a nation.",
        rubricElements: [
            { element: "A-E", covered: true, note: "Intellectual work completed" },
            { element: "F-H", covered: false, note: "Abandoned before final acts" }
        ],
        detailedAnalysis: "Disillusionment is a luxury those with privilege can afford. The masses had no choice but to continue suffering. By abandoning the cause after writing both novels, you wasted your platform and influence when they were most needed.",
        isEnding: true,
        endingType: "bad"
    },

    d5_preparation: {
        title: "F. LA LIGA FILIPINA",
        year: "1892",
        story: "You return to Manila and found La Liga Filipina (The Philippine League), a civic organization promoting unity, mutual protection, and education. Within days, Spanish authorities arrest you—your reputation makes you too dangerous. You're exiled to Dapitan, a remote town in Mindanao.",
        context: "La Liga Filipina lasted only one meeting before Spanish authorities crushed it. However, it inspired the creation of the Katipunan.",
        additionalInfo: "📖 Founded July 3, 1892, at Doroteo Ongjunco's house on Azcarraga Street, Manila. Only one meeting held before your arrest on July 6. The organization's aims: 1) Unite the archipelago into one compact, vigorous, and homogenous body; 2) Mutual protection in every want and necessity; 3) Defense against all violence and injustice; 4) Encouragement of education, agriculture, and commerce; 5) Study and application of reforms. Structure: Councils in towns (Cuerpo de Compromisarios), provincial bodies, supreme council. Members included Domingo Franco, Ambrosio Salvador, Deodato Arellano, Andrés Bonifacio. On July 7, three days after founding, Governor-General Despujol ordered your deportation to Mindanao for 'anti-religious and anti-patriotic' activities—but really because your novels made you too influential. Though La Liga dissolved after your exile, Andrés Bonifacio and others immediately formed the Katipunan (KKK—Kataastaasang, Kagalanggalangang Katipunan ng mga Anak ng Bayan) on July 7, 1892—using La Liga's structure but committing to armed revolution. Bonifacio adopted your vision but concluded peaceful reform was impossible. Your one-meeting organization thus birthed the revolution—not through violence, but by demonstrating Spanish refusal to tolerate even civic organizing. La Liga proved: the colonizer will not reform voluntarily; Filipino unity is possible; education and organization must precede armed struggle.",
        question: "You're in Dapitan exile. How will you spend these years?",
        choices: [
            { id: 'd6_escape', text: "🏃 Escape and flee abroad—you've sacrificed enough", outcome: "flight", icon: "🌊" },
            { id: 'd6_bitter', text: "😠 Become bitter and isolated—give up the cause", outcome: "despair", icon: "⛓️" },
            { id: 'd6_serve', text: "🏥 Serve the community—teach, heal, and improve lives", outcome: "service", icon: "💚" }
        ]
    },

    d6_escape: {
        title: "ENDING: The Escapee",
        year: "1892-1893",
        story: "You plan and execute an escape from Dapitan, fleeing to Singapore. You live the rest of your life abroad, writing occasionally but never returning. The revolution happens without your guidance.",
        context: "Rizal had opportunities to escape but chose to stay and serve. Element G (La Liga Filipina) was already founded, but your escape prevents it from bearing fruit. Element F (Letter to Young Women of Malolos) could have been written in exile, but your spirit is broken.",
        impact: "Your escape is seen as cowardice. The revolution proceeds without the moral foundation you could have provided. You achieved Elements A-E and partially G, but never demonstrated community service in Dapitan or achieved heroic martyrdom (H).",
        rubricElements: [
            { element: "A-E", covered: true, note: "Intellectual foundation strong" },
            { element: "F", covered: "partial", note: "Some advocacy but incomplete" },
            { element: "G", covered: "partial", note: "La Liga founded but abandoned" },
            { element: "H", covered: false, note: "Fled instead of sacrificing" }
        ],
        detailedAnalysis: "Exile is a test of character. Rizal used Dapitan to build a model community, proving Filipinos could govern themselves. Your escape wastes this opportunity and shows the Spanish they successfully broke your spirit.",
        isEnding: true,
        endingType: "bad"
    },

    d6_bitter: {
        title: "ENDING: Broken in Exile",
        year: "1892-1896",
        story: "Exile breaks you. You become depressed and isolated, losing faith in the Filipino people and the reform cause. When the revolution begins in 1896, you're arrested and executed, but you die spiritually defeated.",
        context: "Exile was meant to break political prisoners spiritually and politically. Spanish authorities succeeded with you. You achieved Elements A-G partially but your broken spirit prevents you from serving the Dapitan community (G) or dying with dignity (H).",
        impact: "Your legacy is one of defeat. You die executed, but unlike the heroic martyrdom of Element H, your death inspires no one. The revolution loses its potential philosophical leader to despair.",
        rubricElements: [
            { element: "A-E", covered: true, note: "Past achievements remain" },
            { element: "F", covered: "partial", note: "Some earlier advocacy" },
            { element: "G", covered: "partial", note: "La Liga founded but spirit broken" },
            { element: "H", covered: false, note: "Death without dignity or inspiration" }
        ],
        detailedAnalysis: "Mental fortitude is as important as intellectual brilliance. Rizal faced the same exile but used it to demonstrate Filipino capacity for self-governance. Your defeat shows that colonialism's greatest weapon was psychological.",
        isEnding: true,
        endingType: "bad"
    },

    d6_serve: {
        title: "G. DAPITAN - THE MODEL COMMUNITY",
        year: "1892-1896",
        story: "Despite exile, you transform Dapitan into a model community. You build a school, hospital, and water system. You teach children, treat patients for free, and introduce scientific farming. You prove that Filipinos can build a progressive society. Even in exile, you inspire.",
        context: "Rizal's four years in Dapitan showed his vision for a progressive Philippines. He practiced what he preached about reform and education.",
        additionalInfo: "📖 Arrived July 17, 1892, age 31. Commander Ricardo Carnicero made you report to him twice daily but otherwise gave freedom. You transformed the remote fishing village into a model for Filipino self-governance. EDUCATION: Founded Talisay school—teaching 21 boys reading, writing, Spanish, English, math, geography, gymnastics, reading, and moral values. No tuition fees. Curriculum included physical education, nature study, practical skills. Built dormitories for poor students. MEDICINE: Opened clinic treating locals for free. Performed over 900 eye surgeries, including on your mother's cataracts. Studied malaria, treated tropical diseases, promoted hygiene. ENGINEERING: Designed and built water system delivering clean drinking water from mountains to town via bamboo pipes. Built dam, roads, bridges. AGRICULTURE: Introduced scientific farming—coffee, cacao, coconuts, fruit trees, hemp. Experimented with crops to improve yields. Raised chickens, goats, cattle. COMMUNITY: Built plaza, gymnasium, library. Organized community projects. Taught adults literacy and skills. SCIENCE: Collected 200+ species of plants, shells, butterflies. Discovered Draco rizali (flying dragon lizard), Apogonia rizali (beetle), Rhacophorus rizali (frog). Corresponded with scientists worldwide. CULTURE: Taught sculpture, painting, poetry. Produced plays. Built museum. Your partner Josephine Bracken lived with you; your son died at birth December 1896. You wrote to Blumentritt: 'I feel happy here, happier than in Europe, because I know that I am useful.' Dapitan proved Filipinos needed no Spanish 'guidance'—given freedom, they could build their own progressive society. This contradicted colonial narrative entirely.",
        question: "1896: The Katipunan revolution begins. You're arrested as the movement's inspiration. Final choice:",
        choices: [
            { id: 'd7_mercy', text: "🙏 Beg for mercy—you opposed the revolution", outcome: "survival", icon: "⚖️" },
            { id: 'd7_escape', text: "🏃 Attempt escape during transfer to Manila", outcome: "flight", icon: "🚢" },
            { id: 'd7_martyr', text: "⭐ Accept martyrdom—die for your principles", outcome: "heroic", icon: "🌟" }
        ]
    },

    d7_mercy: {
        title: "ENDING: The Compromised Hero",
        year: "1896",
        story: "You write letters disavowing the revolution and begging for mercy. Spain commutes your sentence to life imprisonment. You live but are seen as a coward by revolutionaries. When America wins in 1898, you're freed but disgraced.",
        context: "Rizal opposed the Katipunan's premature timing but maintained his principles until death. Element H (Mi Último Adiós) represents the ultimate patriotic statement made facing death with dignity, not begging for mercy.",
        impact: "You survive but lose moral authority. You achieved Elements A-G, transforming Dapitan into a model community, but failed Element H. Instead of 'The final, ultimate patriotic statement,' you offer compromise and self-preservation. The revolution succeeds, but your name carries shame.",
        rubricElements: [
            { element: "A-G", covered: true, note: "All groundwork completed" },
            { element: "H", covered: false, note: "Begged for mercy instead of heroic sacrifice" }
        ],
        detailedAnalysis: "You completed 7 of 8 rubric elements but failed the final test. Martyrdom requires accepting death with dignity and principle. Your compromise shows that all your earlier work could have been done by someone seeking merely personal legacy, not true national transformation.",
        isEnding: true,
        endingType: "neutral"
    },

    d7_escape: {
        title: "ENDING: The Failed Escape",
        year: "1896",
        story: "You attempt to escape during your transfer to Manila. Spanish guards shoot you during the attempt. You die in chains, your message incomplete. Without a proper martyrdom, your death lacks the symbolic power to fully inspire the revolution.",
        context: "Rizal's execution was public and dignified, maximizing its impact. Element H (Mi Último Adiós) was written before execution, smuggled out to inspire the nation. Dying while attempting escape prevents this final patriotic statement.",
        impact: "Your death is tragic but lacks dignity. You achieved Elements A-G, building the intellectual foundation, but failed Element H. Instead of dying with purpose and leaving Mi Último Adiós as your final message, you die fleeing. The revolution succeeds eventually, but without your martyrdom as its central inspiration.",
        rubricElements: [
            { element: "A-G", covered: true, note: "All preparatory work completed" },
            { element: "H", covered: false, note: "Death lacks dignity and symbolic power" }
        ],
        detailedAnalysis: "How you die matters as much as how you live. Rizal's dignified execution, refusing a blindfold and facing the dawn, became the ultimate symbol of Filipino resistance. Dying while fleeing makes you a footnote, not a martyr. The difference between heroic martyrdom and tragic death is accepting your fate with purpose.",
        isEnding: true,
        endingType: "neutral"
    },

    d7_martyr: {
        title: "H. MARTYRDOM - THE IDEAL ENDING ⭐",
        year: "December 30, 1896",
        story: "At 7:03 AM, you face a firing squad at Bagumbayan Field (now Rizal Park). You refuse a blindfold. Your final poem 'Mi Último Adiós' (My Last Farewell) is smuggled out, hidden in an alcohol lamp. As bullets strike, you turn to face the dawn—dying as you lived, with dignity and purpose.",
        context: "Element H: Mi Último Adiós (My Last Farewell) - Your final, ultimate patriotic statement. The poem expresses love for country, sacrifice without regret, and hope for the future. Rizal's execution was Spain's greatest mistake. Instead of silencing the revolution, it gave it an immortal martyr and symbol. His death proved everything he wrote about Spanish injustice.",
        additionalInfo: "📖 Arrested August 6, 1896, in Dapitan as Katipunan rebellion spreads. Transferred to Fort Santiago prison, Manila—the Spanish Inquisition's old dungeon. Trial: Military court-martial November-December 1896. Charges: founding illegal associations, publishing seditious writings, inciting rebellion. Evidence: Your novels, La Liga Filipina, letters. You maintained you opposed premature armed revolt but not reform. Defense lawyer Lt. Luis Taviel de Andrade (your Ateneo classmate) argued passionately. Verdict predetermined: Death by firing squad. Night of December 29-30: You wrote 'Mi Último Adiós' (My Last Farewell)—14 five-line stanzas, unsigned, hidden in alcohol cooking stove given to sister Trinidad. The poem became the Philippine national poem. Key lines: 'Farewell, dear Fatherland, clime of the sun caress'd, Pearl of the Orient seas, our Eden lost!'...'I die just when I see the dawn break, Through the gloom of night, to herald the day'...'My dreams, when life first opened to me, My dreams when the hopes of youth beat high, Were to see thy lov'd face, O gem of the Orient sea, From gloom and grief, from care and sorrow free.' Morning December 30, 1896, 7:03 AM: Bagumbayan Field (now Luneta/Rizal Park). Age 35. Wearing black suit, black derby hat, white shirt. Walked calmly. Refused blindfold, saying 'I wish to face the firing squad.' Eight native soldiers, ordered to shoot. You requested to face the squad but were denied—shot in the back as 'traitor.' As bullets struck, you spun to fall facing upward toward the rising sun. Your last words: 'Consummatum est' (It is finished—Jesus's final words). Within hours, news spread. Revolutionaries made you their symbol. Your execution unified Filipinos like nothing before—proving Spanish tyranny beyond doubt. Spain surrendered Philippines June 12, 1898. You became 'The First Filipino'—symbol of peaceful resistance, education, sacrifice. December 30 is now Rizal Day national holiday.",
        impact: "Your martyrdom ignites the revolution. Within two years, Spain loses the Philippines. You become the national hero, your face on currency, your writings required reading. December 30 becomes a national holiday. Your sacrifice was not in vain—you showed that one person, armed with courage and pen, can change history.",
        quote: "The youth is the hope of our future. - Jose Rizal",
        rubricElements: [
            { element: "A. Childhood & Early Influences (10 pts)", covered: true, note: "GOMBURZA execution instilled patriotic ideals, family persecution shaped worldview" },
            { element: "B. Sa Aking mga Kababata (5 pts)", covered: true, note: "Early articulation of national language importance" },
            { element: "C. A La Juventud Filipina (10 pts)", covered: true, note: "Called youth to intellectual endeavors as foundation for progress" },
            { element: "D. Noli Me Tangere - Elias (5 pts)", covered: true, note: "Exposed colonial abuses through Elias's reformist-revolutionary viewpoint" },
            { element: "E. El Filibusterismo - Fr. Florentino (10 pts)", covered: true, note: "Father Florentino's message about necessary preconditions for revolution" },
            { element: "F. Letter to Young Women of Malolos (10 pts)", covered: true, note: "Critiqued friar influence, advocated for educated and empowered women" },
            { element: "G. La Liga Filipina (10 pts)", covered: true, note: "Organized non-violent, unified reform movement despite immediate suppression" },
            { element: "H. Mi Último Adiós (10 pts)", covered: true, note: "Final patriotic statement - ultimate sacrifice for country without regret" }
        ],
        detailedAnalysis: "You successfully completed all 8 rubric elements of Rizal's life journey. From witnessing GOMBURZA's execution as a child (A), to writing poetry celebrating Filipino identity (B), calling youth to action (C), exposing colonial abuse through novels (D, E), advocating for women's rights (F), organizing civic reform (G), and finally making the ultimate sacrifice (H). Each choice built upon the previous, creating a foundation for Philippine independence. Your path demonstrates that lasting change requires education, moral preparation, intellectual work, and ultimately, the courage to sacrifice everything for principle.",
        isEnding: true,
        endingType: "ideal",
        achievements: [
            "✅ National Hero Status",
            "✅ Inspired Philippine Revolution",
            "✅ Exposed Colonial Brutality",
            "✅ Created National Consciousness",
            "✅ Legacy Spans Centuries",
            "✅ All 8 Rubric Elements Achieved (70/70 points)"
        ]
    }
};

export default scenes;
