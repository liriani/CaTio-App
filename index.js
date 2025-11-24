const units = {
    1: {
    title: "Ser & Estar",
    color: "indigo",
    desc: "Estat, identitat i ubicació.",
    explanation: `
                    <div class="space-y-4">
                        <table class="w-full text-center border-collapse bg-white rounded-lg overflow-hidden shadow-sm exp-table mb-4">
                            <thead class="bg-indigo-100 text-indigo-800">
                                <tr><th>Pronom</th><th>SER</th><th>ESTAR</th></tr>
                            </thead>
                            <tbody class="text-gray-700">
                                <tr><td class="font-bold text-gray-400">Jo</td><td>sóc</td><td>estic</td></tr>
                                <tr><td class="font-bold text-gray-400">Tu</td><td>ets</td><td>estàs</td></tr>
                                <tr><td class="font-bold text-gray-400">Ell/a</td><td>és</td><td>està</td></tr>
                                <tr><td class="font-bold text-gray-400">Nosaltres</td><td>som</td><td>estem</td></tr>
                                <tr><td class="font-bold text-gray-400">Vosaltres</td><td>sou</td><td>esteu</td></tr>
                                <tr><td class="font-bold text-gray-400">Ells/es</td><td>són</td><td>estan</td></tr>
                            </tbody>
                        </table>

                         <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div class="bg-indigo-50 p-3 rounded-lg border border-indigo-100">
                                <h4 class="text-indigo-800 font-bold uppercase text-sm mb-2">SER (Identitat)</h4>
                                <ul class="list-disc pl-4 text-sm space-y-1">
                                    <li>Qui ets? (Noms, professions)</li>
                                    <li>D'on ets? (Origen)</li>
                                    <li>Com ets? (Característiques)</li>
                                    <li>L'hora (Són les dues)</li>
                                </ul>
                            </div>
                            <div class="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                                <h4 class="text-emerald-800 font-bold uppercase text-sm mb-2">ESTAR (Estat)</h4>
                                <ul class="list-disc pl-4 text-sm space-y-1">
                                    <li>On ets? (Ubicació física)</li>
                                    <li>Com estàs? (Estats temporals)</li>
                                    <li>Estar + Gerundi (Estic menjant)</li>
                                </ul>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-4">
                            <div class="visual-card bg-indigo-50 border-indigo-200">
                                <span class="visual-emoji">🆔🎭</span>
                                <span class="visual-title text-indigo-700">SER</span>
                                <span class="visual-desc">Qui ets, Com ets (sempre), Origen.</span>
                                <em class="block text-xs mt-2 text-indigo-600">"Sóc humà"</em>
                            </div>
                            <div class="visual-card bg-emerald-50 border-emerald-200">
                                <span class="visual-emoji">📍🌡️</span>
                                <span class="visual-title text-emerald-700">ESTAR</span>
                                <span class="visual-desc">On ets (Lloc), Com estàs (Ara mateix).</span>
                                <em class="block text-xs mt-2 text-emerald-600">"Estic cansat"</em>
                            </div>
                        </div>
                    </div>
                `,
    drills: [
{ t: 1, q: "Jo (ser) →", a: "sóc", h: "Identitat", e: "Jo sóc (1a persona). Expressa qui ets." },
{ t: 3, q: "___ sóc metge.", a: "jo", h: "Pronom", e: "'Sóc' només pot anar amb 'Jo'." },
{ t: 1, q: "Vosaltres (estar) →", a: "esteu", h: "Ubicació", e: "Vosaltres esteu (2a plural)." },
{ t: 3, q: "___ esteu a la cuina?", a: "vosaltres", h: "Pronom", e: "'Esteu' correspon a 'Vosaltres'." },
{ t: 1, q: "Ell (estar) →", a: "està", h: "Estat temporal", e: "Recorda l'accent obert: Està." },
{ t: 3, q: "___ és el meu pare.", a: "ell", h: "Pronom (Masc)", e: "'És' correspon a 3a persona singular." },
{ t: 1, q: "Nosaltres (ser) →", a: "som", h: "Identitat", e: "Nosaltres som (1a plural)." },
{ t: 3, q: "___ som amics.", a: "nosaltres", h: "Pronom", e: "'Som' correspon a 'Nosaltres'." },
{ t: 2, q: "Estàs cansat avui?", a: "Sí, estic cansat.", h: "Respon a 'Tu' amb 'Jo'", req: 'pos', e: "Si pregunto 'Tu', respons 'Jo estic'." },
{ t: 2, q: "És gran el teu pis?", a: "Sí, és gran.", h: "Qualitat permanent", req: 'pos', e: "La mida és una característica (Ser)." },
{ t: 3, q: "El meu germà ___ a casa.", a: "està", h: "Ubicació", e: "Estar s'utilitza per a localització." },
{ t: 3, q: "La meva germana ___ metgessa.", a: "és", h: "Professió", e: "Ser s'utilitza per a professions." }
    ]},
    2: {
    title: "Haver & Tenir",
    color: "emerald",
    desc: "Possessió i existència.",
    explanation: `
                    <div class="space-y-4">
                        <table class="w-full text-center border-collapse bg-white rounded-lg overflow-hidden shadow-sm exp-table mb-4">
                            <thead class="bg-emerald-100 text-emerald-800">
                                <tr><th>Pronom</th><th>TENIR (Possessió)</th><th>HAVER (Aux)</th></tr>
                            </thead>
                            <tbody class="text-gray-700">
                                <tr><td class="font-bold text-gray-400">Jo</td><td>tinc</td><td>he</td></tr>
                                <tr><td class="font-bold text-gray-400">Tu</td><td>tens</td><td>has</td></tr>
                                <tr><td class="font-bold text-gray-400">Ell/a</td><td>té</td><td>ha</td></tr>
                                <tr><td class="font-bold text-gray-400">Nosaltres</td><td>tenim</td><td>hem</td></tr>
                                <tr><td class="font-bold text-gray-400">Vosaltres</td><td>teniu</td><td>heu</td></tr>
                                <tr><td class="font-bold text-gray-400">Ells/es</td><td>tenen</td><td>han</td></tr>
                            </tbody>
                        </table>

                        <div class="bg-white p-4 rounded border mb-4">
                            <h4 class="text-emerald-700 font-bold text-sm">1. TENIR (Possessió i Sensacions)</h4>
                            <p class="text-sm">S'usa per possessió i per sensacions físiques (gana, fred, son).</p>
                            <h4 class="text-emerald-700 font-bold text-sm mt-2">2. HAVER (Auxiliar i Existència)</h4>
                            <p class="text-sm">S'usa per formar temps compostos (he menjat) o "Hi ha" (There is).</p>
                        </div>

                        <div class="grid grid-cols-2 gap-4">
                            <div class="visual-card bg-emerald-50 border-emerald-200">
                                <span class="visual-emoji">🤲🔑</span>
                                <span class="visual-title text-emerald-700">TENIR</span>
                                <span class="visual-desc">Possessió i Sensacions (Fred, Gana).</span>
                                <em class="block text-xs mt-2 text-emerald-600">"Tinc un cotxe"</em>
                            </div>
                            <div class="visual-card bg-gray-50 border-gray-200">
                                <span class="visual-emoji">🏗️❓</span>
                                <span class="visual-title text-gray-700">HAVER</span>
                                <span class="visual-desc">Auxiliar (He fet) i Existència (Hi ha).</span>
                                <em class="block text-xs mt-2 text-gray-600">"Hi ha pa?"</em>
                            </div>
                        </div>
                    </div>
                `,
    drills: [
{ t: 1, q: "Jo (tenir) →", a: "tinc", h: "Possessió", e: "Jo tinc (irregular en 1a persona)." },
{ t: 3, q: "___ tinc dos gossos.", a: "jo", h: "Pronom", e: "'Tinc' és 1a persona singular." },
{ t: 1, q: "Ells (haver) →", a: "han", h: "Auxiliar", e: "Ells han (H muda)." },
{ t: 3, q: "___ han menjat molt.", a: "ells", h: "Pronom (Masc)", e: "'Han' és 3a persona plural." },
{ t: 3, q: "___ tenim fred.", a: "nosaltres", h: "Pronom", e: "Tenir s'usa per sensacions físiques." },
{ t: 2, q: "Tens un cotxe nou?", a: "Sí, tinc un cotxe nou.", h: "Resposta Afirmativa", req: 'pos', e: "Respon amb el mateix verb: Tens -> Tinc." },
{ t: 2, q: "Hi ha molta gent?", a: "No, no hi ha molta gent.", h: "Resposta Negativa", req: 'neg', e: "S'usa 'Hi ha' per existència (There is)." },
{ t: 3, q: "Jo ___ molta son.", a: "tinc", h: "Necessitat física", e: "En català 'Tinc son' (no sóc)." },
{ t: 3, q: "___ dos llibres aquí.", a: "Hi ha", h: "Existència", e: "Haver-hi (Hi ha) expressa existència." }
    ]},
    3: {
    title: "Anar & Venir",
    color: "yellow",
    desc: "Moviment i direcció.",
    explanation: `
                    <div class="space-y-4">
                        <table class="w-full text-center border-collapse bg-white rounded-lg overflow-hidden shadow-sm exp-table mb-4">
                            <thead class="bg-yellow-100 text-yellow-800">
                                <tr><th>Pronom</th><th>ANAR (Go)</th><th>VENIR (Come)</th></tr>
                            </thead>
                            <tbody class="text-gray-700">
                                <tr><td class="font-bold text-gray-400">Jo</td><td>vaig</td><td>vinc</td></tr>
                                <tr><td class="font-bold text-gray-400">Tu</td><td>vas</td><td>vens</td></tr>
                                <tr><td class="font-bold text-gray-400">Ell/a</td><td>va</td><td>ve</td></tr>
                                <tr><td class="font-bold text-gray-400">Nosaltres</td><td>anem</td><td>venim</td></tr>
                                <tr><td class="font-bold text-gray-400">Vosaltres</td><td>aneu</td><td>veniu</td></tr>
                                <tr><td class="font-bold text-gray-400">Ells/es</td><td>van</td><td>vénen</td></tr>
                            </tbody>
                        </table>

                        <p class="text-sm">La diferència depèn d'on ets TU mentre parles:</p>

                        <div class="grid grid-cols-2 gap-4">
                            <div class="visual-card bg-yellow-50 border-yellow-200">
                                <span class="visual-emoji">🚶➡🏠</span>
                                <span class="visual-title text-yellow-700">ANAR</span>
                                <span class="visual-desc">Moviment cap allà (Go).</span>
                                <em class="block text-xs mt-2 text-yellow-600">"Vaig al cinema"</em>
                            </div>
                            <div class="visual-card bg-orange-50 border-orange-200">
                                <span class="visual-emoji">🏠⬅🚶</span>
                                <span class="visual-title text-orange-700">VENIR</span>
                                <span class="visual-desc">Moviment cap aquí (Come).</span>
                                <em class="block text-xs mt-2 text-orange-600">"Vens a casa meva?"</em>
                            </div>
                        </div>
                    </div>
                `,
    drills: [
{ t: 1, q: "Jo (anar) →", a: "vaig", h: "Moviment", e: "Jo vaig. Irregular." },
{ t: 3, q: "___ vaig a la platja.", a: "jo", h: "Pronom", e: "'Vaig' és la 1a persona singular." },
{ t: 1, q: "Tu (venir) →", a: "vens", h: "Moviment", e: "Tu vens. Canvia arrel a 'ven'." },
{ t: 3, q: "___ vens a la festa?", a: "tu", h: "Pronom", e: "'Vens' correspon a 'Tu'." },
{ t: 3, q: "___ anem al cinema.", a: "nosaltres", h: "Pronom", e: "'Anem' correspon a 'Nosaltres'." },
{ t: 2, q: "Vas a la feina a peu?", a: "Sí, vaig a la feina a peu.", h: "Afirmativa", req: 'pos', e: "Tu vas -> Jo vaig." },
{ t: 2, q: "Vens demà?", a: "No, no vinc demà.", h: "Negativa", req: 'neg', e: "Jo vinc. Negació amb 'no'." },
{ t: 3, q: "Nosaltres ___ a la platja.", a: "anem", h: "Moviment regular", e: "Anar cap allà = Anem." },
{ t: 3, q: "Ell va ___ l'escola.", a: "a", h: "Preposició", e: "Verbs de moviment solen portar 'a'." }
    ]},
    4: {
    title: "Fer & Dir",
    color: "red",
    desc: "Acció, clima i comunicació.",
    explanation: `
                    <div class="space-y-4">
                        <table class="w-full text-center border-collapse bg-white rounded-lg overflow-hidden shadow-sm exp-table mb-4">
                            <thead class="bg-red-100 text-red-800">
                                <tr><th>Pronom</th><th>FER (Do/Make)</th><th>DIR (Say)</th></tr>
                            </thead>
                            <tbody class="text-gray-700">
                                <tr><td class="font-bold text-gray-400">Jo</td><td>faig</td><td>dic</td></tr>
                                <tr><td class="font-bold text-gray-400">Tu</td><td>fas</td><td>dius</td></tr>
                                <tr><td class="font-bold text-gray-400">Ell/a</td><td>fa</td><td>diu</td></tr>
                                <tr><td class="font-bold text-gray-400">Nosaltres</td><td>fem</td><td>diem</td></tr>
                                <tr><td class="font-bold text-gray-400">Vosaltres</td><td>feu</td><td>dieu</td></tr>
                                <tr><td class="font-bold text-gray-400">Ells/es</td><td>fan</td><td>diuen</td></tr>
                            </tbody>
                        </table>

                        <p class="text-sm"><strong>FER:</strong> Molt versàtil. S'usa per accions i CLIMA.</p>

                        <div class="grid grid-cols-2 gap-4">
                            <div class="visual-card bg-red-50 border-red-200">
                                <span class="visual-emoji">🛠️⛈️</span>
                                <span class="visual-title text-red-700">FER</span>
                                <span class="visual-desc">Accions i Clima (Fa sol, Fa fred).</span>
                                <em class="block text-xs mt-2 text-red-600">"Faig el llit"</em>
                            </div>
                            <div class="visual-card bg-orange-50 border-orange-200">
                                <span class="visual-emoji">🗣️💬</span>
                                <span class="visual-title text-orange-700">DIR</span>
                                <span class="visual-desc">Comunicar paraules.</span>
                                <em class="block text-xs mt-2 text-orange-600">"Què dius?"</em>
                            </div>
                        </div>
                    </div>
                `,
    drills: [
{ t: 1, q: "Jo (fer) →", a: "faig", h: "Acció", e: "Irregular 1a persona: Faig." },
{ t: 3, q: "___ faig els deures.", a: "jo", h: "Pronom", e: "'Faig' sempre és 'Jo'." },
{ t: 1, q: "Ell (dir) →", a: "diu", h: "Comunicació", e: "Ell diu." },
{ t: 3, q: "___ diu la veritat.", a: "ell", h: "Pronom (Masc)", e: "'Diu' és 3a persona singular." },
{ t: 3, q: "___ fem un pastís.", a: "nosaltres", h: "Pronom", e: "'Fem' és 1a persona plural." },
{ t: 2, q: "Feu exercici?", a: "Sí, fem exercici.", h: "Afirmativa", req: 'pos', e: "Pregunta a Vosaltres -> Resposta Nosaltres." },
{ t: 2, q: "Fa sol avui?", a: "Sí, fa sol.", h: "Temps", req: 'pos', e: "El clima utilitza el verb Fer." },
{ t: 3, q: "Avui ___ molt vent.", a: "fa", h: "Clima", e: "Fa vent, fa sol, fa fred." },
{ t: 3, q: "Jo sempre ___ els deures.", a: "faig", h: "Acció", e: "Jo faig." }
    ]},
    5: {
    title: "Poder & Voler",
    color: "blue",
    desc: "Modals d'habilitat i desig.",
    explanation: `
                    <div class="space-y-4">
                        <table class="w-full text-center border-collapse bg-white rounded-lg overflow-hidden shadow-sm exp-table mb-4">
                            <thead class="bg-blue-100 text-blue-800">
                                <tr><th>Pronom</th><th>PODER (Can)</th><th>VOLER (Want)</th></tr>
                            </thead>
                            <tbody class="text-gray-700">
                                <tr><td class="font-bold text-gray-400">Jo</td><td>puc</td><td>vull</td></tr>
                                <tr><td class="font-bold text-gray-400">Tu</td><td>pots</td><td>vols</td></tr>
                                <tr><td class="font-bold text-gray-400">Ell/a</td><td>pot</td><td>vol</td></tr>
                                <tr><td class="font-bold text-gray-400">Nosaltres</td><td>podem</td><td>volem</td></tr>
                                <tr><td class="font-bold text-gray-400">Vosaltres</td><td>podeu</td><td>voleu</td></tr>
                                <tr><td class="font-bold text-gray-400">Ells/es</td><td>poden</td><td>volen</td></tr>
                            </tbody>
                        </table>

                        <p class="text-sm">Aquests verbs van seguits d'un <strong>Infinitiu</strong>.</p>
                        <div class="bg-blue-50 border border-blue-200 p-2 rounded text-xs mb-4">
                            <strong>Alerta conjugació:</strong> Jo vull (No "volo"), Jo puc (No "podo").
                        </div>

                        <div class="grid grid-cols-2 gap-4">
                            <div class="visual-card bg-blue-50 border-blue-200">
                                <span class="visual-emoji">💪🔓</span>
                                <span class="visual-title text-blue-700">PODER</span>
                                <span class="visual-desc">Habilitat o Permís.</span>
                                <em class="block text-xs mt-2 text-blue-600">"Puc entrar?"</em>
                            </div>
                            <div class="visual-card bg-pink-50 border-pink-200">
                                <span class="visual-emoji">❤️💭</span>
                                <span class="visual-title text-pink-700">VOLER</span>
                                <span class="visual-desc">Desig o Voluntat.</span>
                                <em class="block text-xs mt-2 text-pink-600">"Vull aigua"</em>
                            </div>
                        </div>
                    </div>
                `,
    drills: [
{ t: 1, q: "Jo (poder) →", a: "puc", h: "Habilitat", e: "Irregular 1a persona: Puc (no 'podo')." },
{ t: 3, q: "___ puc ajudar.", a: "jo", h: "Pronom", e: "'Puc' és 1a persona." },
{ t: 1, q: "Ell (voler) →", a: "vol", h: "Desig", e: "Ell vol." },
{ t: 3, q: "___ vol un gelat.", a: "ell", h: "Pronom (Masc)", e: "'Vol' és 3a persona." },
{ t: 3, q: "___ volem anar a casa.", a: "nosaltres", h: "Pronom", e: "'Volem' és nosaltres." },
{ t: 2, q: "Vols venir?", a: "Sí, vull venir.", h: "Afirmativa", req: 'pos', e: "Pregunta 'Tu' -> Resposta 'Jo vull'." },
{ t: 2, q: "Podeu parlar català?", a: "No, no podem parlar català.", h: "Negativa", req: 'neg', e: "Pregunta 'Vosaltres' -> Resposta 'Nosaltres'." },
{ t: 3, q: "Jo ___ estudiar més.", a: "vull", h: "Desig", e: "Jo vull (irregular)." },
{ t: 3, q: "Ells no ___ venir.", a: "poden", h: "Negació habilitat", e: "Ells poden." }
    ]},
    6: {
    title: "Regulars & Reflexius",
    color: "pink",
    desc: "Patrons i verbs pronominals.",
    explanation: `
                    <div class="space-y-4">
                        <div class="grid grid-cols-2 gap-2 mb-4">
                             <table class="w-full text-center border-collapse bg-white rounded-lg overflow-hidden shadow-sm exp-table">
                                <thead class="bg-gray-100 text-gray-800"><tr><th>Regulars (-AR)</th></tr></thead>
                                <tbody>
                                    <tr><td>Parlo</td></tr>
                                    <tr><td>Parles</td></tr>
                                    <tr><td>Parla</td></tr>
                                    <tr><td>Parlem</td></tr>
                                    <tr><td>Parleu</td></tr>
                                    <tr><td>Parlen</td></tr>
                                </tbody>
                            </table>
                             <table class="w-full text-center border-collapse bg-white rounded-lg overflow-hidden shadow-sm exp-table">
                                <thead class="bg-pink-100 text-pink-800"><tr><th>Reflexius</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Em</strong> rento</td></tr>
                                    <tr><td><strong>Et</strong> rentes</td></tr>
                                    <tr><td><strong>Es</strong> renta</td></tr>
                                    <tr><td><strong>Ens</strong> rentem</td></tr>
                                    <tr><td><strong>Us</strong> renteu</td></tr>
                                    <tr><td><strong>Es</strong> renten</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <p class="text-sm">Els verbs reflexius són accions que recauen sobre un mateix (rentar-se, llevar-se).</p>

                         <div class="visual-card bg-pink-50 border-pink-200">
                            <span class="visual-emoji">🪞🧼</span>
                            <span class="visual-title text-pink-700">REFLEXIUS</span>
                            <span class="visual-desc">L'acció torna a tu (Rentar-se, Pentinar-se).</span>
                            <em class="block text-xs mt-2 text-pink-600">Necessiten Pronom: Em, Et, Es...</em>
                        </div>
                    </div>
                `,
    drills: [
{ t: 1, q: "Jo (parlar) →", a: "parlo", h: "Regular -AR", e: "Regular: -o per la 1a persona." },
{ t: 3, q: "___ parlo català.", a: "jo", h: "Pronom", e: "Terminació -o indica Jo." },
{ t: 1, q: "Ell (rentar-se) →", a: "es renta", h: "Reflexiu", e: "Ell: pronom 'es' + renta." },
{ t: 3, q: "___ es renta la cara.", a: "ell", h: "Pronom (Masc)", e: "Pronom 'es' indica 3a persona." },
{ t: 2, q: "Et rentes les mans?", a: "Sí, em rento les mans.", h: "Afirmativa", req: 'pos', e: "Tu et rentes -> Jo em rento." },
{ t: 3, q: "Ella ___ vesteix de blau.", a: "es", h: "Pronom", e: "Ella es vesteix (Reflexiu)." },
{ t: 3, q: "Nosaltres ___ a Girona.", a: "vivim", h: "Regular -IR", e: "Viure -> Vivim." }
    ]},
    7: {
    title: "Passat Perfet",
    color: "purple",
    desc: "Haver + Participi.",
    explanation: `
                    <div class="space-y-4">
                        <table class="w-full text-center border-collapse bg-white rounded-lg overflow-hidden shadow-sm exp-table mb-4">
                            <thead class="bg-purple-100 text-purple-800">
                                <tr><th>Auxiliar</th><th>Participis Regulars</th><th>Irregulars</th></tr>
                            </thead>
                            <tbody class="text-gray-700">
                                <tr><td><strong>He</strong></td><td>Parla<strong>t</strong></td><td>Fet (Fer)</td></tr>
                                <tr><td><strong>Has</strong></td><td>Menga<strong>t</strong></td><td>Vist (Veure)</td></tr>
                                <tr><td><strong>Ha</strong></td><td>Dormi<strong>t</strong></td><td>Escrit (Escriure)</td></tr>
                                <tr><td><strong>Hem</strong></td><td>Visc<strong>ut</strong></td><td>Dit (Dir)</td></tr>
                                <tr><td><strong>Heu</strong></td><td></td><td>Mort (Morir)</td></tr>
                                <tr><td><strong>Han</strong></td><td></td><td>Obert (Obrir)</td></tr>
                            </tbody>
                        </table>

                        <p class="text-sm">S'usa pel <strong>Passat Recent</strong> (avui, fa una estona, o experiències de vida).</p>

                        <div class="visual-card bg-purple-50 border-purple-200">
                            <span class="visual-emoji">⏰⏮️</span>
                            <span class="visual-title text-purple-700">PASSAT RECENT</span>
                            <span class="visual-desc">Accions d'avui o experiències de vida.</span>
                            <div class="flex justify-center items-center gap-2 mt-2 text-sm font-bold bg-white p-2 rounded">
                                <span>HAVER (He)</span> ➕ <span>PARTICIPI (Menjat)</span>
                            </div>
                        </div>
                    </div>
                `,
    drills: [
{ t: 1, q: "Jo (haver + parlar) →", a: "he parlat", h: "Passat compost", e: "Jo he + parlat (Participi)." },
{ t: 3, q: "___ he parlat amb ella.", a: "jo", h: "Pronom", e: "'He' és l'auxiliar de 1a persona." },
{ t: 1, q: "Tu (haver + fer) →", a: "has fet", h: "Irregular", e: "Fer -> Fet (Participi irregular)." },
{ t: 3, q: "___ has fet els deures?", a: "tu", h: "Pronom", e: "'Has' és l'auxiliar de 2a persona." },
{ t: 2, q: "Has menjat ja?", a: "Sí, ja he menjat.", h: "Afirmativa", req: 'pos', e: "Has menjat -> He menjat." },
{ t: 3, q: "Jo ___ (escriure) una carta.", a: "he escrit", h: "Participi irregular", e: "Escriure -> Escrit." }
    ]},
    8: {
    title: "Futur Simple",
    color: "cyan",
    desc: "Accions futures i prediccions.",
    explanation: `
                    <div class="space-y-4">
                        <table class="w-full text-center border-collapse bg-white rounded-lg overflow-hidden shadow-sm exp-table mb-4">
                            <thead class="bg-cyan-100 text-cyan-800">
                                <tr><th>Pronom</th><th>Terminació</th><th>Exemple (Parlar)</th></tr>
                            </thead>
                            <tbody class="text-gray-700">
                                <tr><td>Jo</td><td class="font-bold">-é</td><td>Parlar<strong>é</strong></td></tr>
                                <tr><td>Tu</td><td class="font-bold">-às</td><td>Parlar<strong>às</strong></td></tr>
                                <tr><td>Ell/a</td><td class="font-bold">-à</td><td>Parlar<strong>à</strong></td></tr>
                                <tr><td>Nosaltres</td><td class="font-bold">-em</td><td>Parlar<strong>em</strong></td></tr>
                                <tr><td>Vosaltres</td><td class="font-bold">-eu</td><td>Parlar<strong>eu</strong></td></tr>
                                <tr><td>Ells/es</td><td class="font-bold">-an</td><td>Parlar<strong>an</strong></td></tr>
                            </tbody>
                        </table>

                        <p class="text-sm">El futur és molt regular. Només has d'afegir les terminacions a l'<strong>INFINITIU</strong> complet.</p>

                        <div class="visual-card bg-cyan-50 border-cyan-200">
                            <span class="visual-emoji">🚀🔮</span>
                            <span class="visual-title text-cyan-700">FUTUR</span>
                            <span class="visual-desc">Infinitiu sencer + Terminacions.</span>
                            <div class="mt-2 text-xs text-gray-500">Excepcions: Fer->Faré, Haver->Hauré</div>
                        </div>
                    </div>
                `,
    drills: [
{ t: 1, q: "Jo (parlar) →", a: "parlaré", h: "Infinitiu + é", e: "Parlar + é." },
{ t: 3, q: "___ parlaré amb ell demà.", a: "jo", h: "Pronom", e: "Acaba en -é (1a persona)." },
{ t: 1, q: "Tu (fer) →", a: "faràs", h: "Irregular", e: "Arrel irregular: Far-." },
{ t: 3, q: "___ faràs els deures.", a: "tu", h: "Pronom", e: "Acaba en -às (2a persona)." },
{ t: 2, q: "Faràs els deures?", a: "Sí, faré els deures.", h: "Afirmativa", req: 'pos', e: "Faràs -> Faré." },
{ t: 3, q: "Demà ___ ploure.", a: "plourà", h: "Temps", e: "Ploure (Ell) -> Plourà." }
    ]},
    9: {
    title: "Els Possessius",
    color: "orange",
    desc: "Meu, teva, nostre...",
    explanation: `
                    <div class="space-y-4">
                        <table class="w-full text-center border-collapse bg-white rounded-lg overflow-hidden shadow-sm exp-table mb-4">
                            <thead class="bg-orange-100 text-orange-800">
                                <tr><th></th><th>Masc. Sing</th><th>Fem. Sing</th><th>Masc. Pl</th><th>Fem. Pl</th></tr>
                            </thead>
                            <tbody class="text-gray-700">
                                <tr><td class="text-xs text-gray-400">Jo</td><td>Meu</td><td>Meva</td><td>Meus</td><td>Meves</td></tr>
                                <tr><td class="text-xs text-gray-400">Tu</td><td>Teu</td><td>Teva</td><td>Teus</td><td>Teves</td></tr>
                                <tr><td class="text-xs text-gray-400">Ell</td><td>Seu</td><td>Seva</td><td>Seus</td><td>Seves</td></tr>
                                <tr><td class="text-xs text-gray-400">Nos</td><td>Nostre</td><td>Nostra</td><td>Nostres</td><td>Nostres</td></tr>
                                <tr><td class="text-xs text-gray-400">Vos</td><td>Vostre</td><td>Vostra</td><td>Vostres</td><td>Vostres</td></tr>
                            </tbody>
                        </table>

                        <p class="text-sm">Regla d'Or: El gènere i nombre depenen de <strong>la COSA</strong>, no de la persona.</p>

                        <div class="grid grid-cols-2 gap-4">
                            <div class="visual-card bg-orange-50 border-orange-200">
                                <span class="visual-emoji">🙎‍♂️📘</span>
                                <span class="visual-title text-orange-700">EL MEU</span>
                                <span class="visual-desc">Masc (Llibre, Pare).</span>
                            </div>
                            <div class="visual-card bg-orange-50 border-orange-200">
                                <span class="visual-emoji">🙎‍♀️🏠</span>
                                <span class="visual-title text-orange-700">LA MEVA</span>
                                <span class="visual-desc">Fem (Casa, Mare).</span>
                            </div>
                        </div>
                    </div>
                `,
    drills: [
{ t: 1, q: "El meu llibre / La ___ samarreta (Tu) →", a: "teva", h: "Femení Singular", e: "Samarreta és femení singular." },
{ t: 1, q: "Els ___ germans (Jo) →", a: "meus", h: "Masculí Plural", e: "Germans és masculí plural." },
{ t: 2, q: "És el teu gos?", a: "Sí, és el meu.", h: "Pronom possessiu", req: 'pos', e: "Teu -> Meu." },
{ t: 3, q: "La ___ (jo) feina.", a: "meva", h: "Fem. Sing.", e: "Feina és femení." }
    ]},
    10: {
    title: "Pronoms Febles",
    color: "lime",
    desc: "El, la, els, en, hi...",
    explanation: `
                    <div class="space-y-4">
                        <table class="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-sm exp-table mb-4">
                            <thead class="bg-lime-100 text-lime-800"><tr><th>Pronom</th><th>Funció</th><th>Exemple</th></tr></thead>
                            <tbody class="text-gray-700">
                                <tr><td class="font-bold">EL / LA</td><td>Objecte definit</td><td>Vull el pa -> <strong>El</strong> vull</td></tr>
                                <tr><td class="font-bold">ELS / LES</td><td>Objecte plural</td><td>Vull les pomes -> <strong>Les</strong> vull</td></tr>
                                <tr><td class="font-bold">HO</td><td>Neutre / Idees</td><td>Vull això -> <strong>Ho</strong> vull</td></tr>
                                <tr><td class="font-bold">EN</td><td>Quantitat / Origen</td><td>Tinc 3 pomes -> <strong>N'</strong>he tinc 3</td></tr>
                                <tr><td class="font-bold">HI</td><td>Lloc</td><td>Vaig a BCN -> <strong>Hi</strong> vaig</td></tr>
                            </tbody>
                        </table>

                        <p class="text-sm">Els pronoms substitueixen elements ja mencionats.</p>

                        <div class="grid grid-cols-3 gap-2">
                             <div class="visual-card bg-lime-50 border-lime-200 p-1">
                                <span class="visual-emoji text-xl">🍎</span>
                                <span class="visual-title text-xs text-lime-700">EL/LA</span>
                                <span class="visual-desc text-[10px]">La cosa</span>
                            </div>
                             <div class="visual-card bg-lime-50 border-lime-200 p-1">
                                <span class="visual-emoji text-xl">🔢</span>
                                <span class="visual-title text-xs text-lime-700">EN</span>
                                <span class="visual-desc text-[10px]">Quantitat</span>
                            </div>
                             <div class="visual-card bg-lime-50 border-lime-200 p-1">
                                <span class="visual-emoji text-xl">🗺️</span>
                                <span class="visual-title text-xs text-lime-700">HI</span>
                                <span class="visual-desc text-[10px]">Lloc</span>
                            </div>
                        </div>
                    </div>
                `,
    drills: [
{ t: 1, q: "Portar (El Pa) →", a: "portar-lo", h: "OD masc. sing.", e: "El Pa (masc sing) -> Lo (darrere)." },
{ t: 1, q: "Donar (A tu + Això) →", a: "donar-t'ho", h: "Combinació", e: "Et + Ho = T'ho." },
{ t: 2, q: "Has comprat el llibre?", a: "Sí, l'he comprat.", h: "Afirmativa (l')", req: 'pos', e: "El llibre -> L' (davant vocal)." },
{ t: 2, q: "No has anat al cinema?", a: "No, no hi he anat.", h: "Lloc (hi)", req: 'neg', e: "Al cinema (Lloc) -> Hi." },
{ t: 3, q: "Vull pomes. En vull cinc.", a: "en", h: "Quantitat", e: "Quan especifiques número, usa 'En'." }
    ]},
    11: {
    title: "L'Imperatiu",
    color: "gray",
    desc: "Ordres i peticions.",
    explanation: `
                    <div class="space-y-4">
                        <table class="w-full text-center border-collapse bg-white rounded-lg overflow-hidden shadow-sm exp-table mb-4">
                            <thead class="bg-gray-100 text-gray-800">
                                <tr><th>Pronom</th><th>Afirmatiu (Ordre)</th><th>Negatiu (Prohibició)</th></tr>
                            </thead>
                            <tbody class="text-gray-700">
                                <tr><td class="font-bold text-gray-400">Tu</td><td>Parla!</td><td>No parlis!</td></tr>
                                <tr><td class="font-bold text-gray-400">Vosaltres</td><td>Parleu!</td><td>No parleu!</td></tr>
                                <tr><td class="font-bold text-gray-400">Tu (Fer)</td><td>Fes!</td><td>No facis!</td></tr>
                                <tr><td class="font-bold text-gray-400">Vos (Anar)</td><td>Aneu!</td><td>No aneu!</td></tr>
                            </tbody>
                        </table>

                        <div class="grid grid-cols-2 gap-4">
                            <div class="visual-card bg-green-50 border-green-200">
                                <span class="visual-emoji">✅📢</span>
                                <span class="visual-title text-green-700">AFIRMATIU</span>
                                <span class="visual-desc">Fes-ho! (Igual que Present).</span>
                            </div>
                            <div class="visual-card bg-red-50 border-red-200">
                                <span class="visual-emoji">🛑✋</span>
                                <span class="visual-title text-red-700">NEGATIU</span>
                                <span class="visual-desc">No ho facis! (Subjuntiu).</span>
                            </div>
                        </div>
                    </div>
                `,
    drills: [
{ t: 1, q: "Tu (parlar - afirmatiu) →", a: "parla", h: "Ordre", e: "Igual que el present (Tu parles -> Parla)." },
{ t: 1, q: "Vosaltres (anar) →", a: "aneu", h: "Ordre", e: "Igual que el present." },
{ t: 2, q: "Tu menges fruita. (Ordre) →", a: "Menja fruita!", h: "Afirmatiu", req: 'pos', e: "Menges -> Menja!" },
{ t: 3, q: "___ (Dir) la veritat! (Tu)", a: "Digues", h: "Irregular", e: "Imperatiu irregular de Dir." }
    ]},
    12: {
    title: "Condicional & Imperfet",
    color: "fuchsia",
    desc: "Hipòtesis i passat descriptiu.",
    explanation: `
                    <div class="space-y-4">
                        <table class="w-full text-center border-collapse bg-white rounded-lg overflow-hidden shadow-sm exp-table mb-4">
                            <thead class="bg-fuchsia-100 text-fuchsia-800">
                                <tr><th>Pronom</th><th>Imperfet (Used to)</th><th>Condicional (Would)</th></tr>
                            </thead>
                            <tbody class="text-gray-700">
                                <tr><td class="font-bold text-gray-400">Jo</td><td>Cant<strong>ava</strong></td><td>Cantar<strong>ia</strong></td></tr>
                                <tr><td class="font-bold text-gray-400">Tu</td><td>Cant<strong>aves</strong></td><td>Cantar<strong>ies</strong></td></tr>
                                <tr><td class="font-bold text-gray-400">Ell/a</td><td>Cant<strong>ava</strong></td><td>Cantar<strong>ia</strong></td></tr>
                                <tr><td class="font-bold text-gray-400">Nos</td><td>Cant<strong>àvem</strong></td><td>Cantar<strong>íem</strong></td></tr>
                                <tr><td class="font-bold text-gray-400">Vos</td><td>Cant<strong>àveu</strong></td><td>Cantar<strong>íeu</strong></td></tr>
                                <tr><td class="font-bold text-gray-400">Ells/es</td><td>Cant<strong>aven</strong></td><td>Cantar<strong>ien</strong></td></tr>
                            </tbody>
                        </table>

                        <p class="text-sm"><strong>Imperfet:</strong> Per hàbits del passat. <br><strong>Condicional:</strong> Per hipòtesis o cortesia.</p>

                        <div class="grid grid-cols-2 gap-4">
                            <div class="visual-card bg-fuchsia-50 border-fuchsia-200">
                                <span class="visual-emoji">🎞️👴</span>
                                <span class="visual-title text-fuchsia-700">IMPERFET</span>
                                <span class="visual-desc">Hàbits passats. "Abans, jo..."</span>
                            </div>
                            <div class="visual-card bg-purple-50 border-purple-200">
                                <span class="visual-emoji">💭🤔</span>
                                <span class="visual-title text-purple-700">CONDICIONAL</span>
                                <span class="visual-desc">Hipòtesis. "Jo ho faria..."</span>
                            </div>
                        </div>
                    </div>
                `,
    drills: [
{ t: 1, q: "Jo (fer - cond) →", a: "faria", h: "Hipotètic", e: "Fer + ia." },
{ t: 3, q: "___ faria això si pogués.", a: "jo", h: "Pronom", e: "'Faria' pot ser Jo o Ell." },
{ t: 1, q: "Ell (ser - imp) →", a: "era", h: "Passat continu", e: "Ser és irregular a l'imperfet: Era." },
{ t: 2, q: "Si tingués diners...", a: "Compraria un cotxe.", h: "Resultat condicional", req: 'pos', e: "Si + Passat -> Condicional." },
{ t: 3, q: "Abans, jo ___ (viure) a Londres.", a: "vivia", h: "Hàbit passat", e: "Hàbit en el passat = Imperfet." }
    ]},
    13: {
    title: "Subjuntiu",
    color: "teal",
    desc: "Desig, dubte, emoció.",
    explanation: `
                     <div class="space-y-4">
                        <table class="w-full text-center border-collapse bg-white rounded-lg overflow-hidden shadow-sm exp-table mb-4">
                            <thead class="bg-teal-100 text-teal-800">
                                <tr><th></th><th>PARLAR (AR)</th><th>BEURE (ER)</th></tr>
                            </thead>
                            <tbody class="text-gray-700">
                                <tr><td class="text-gray-400">Jo</td><td>Parl<strong>i</strong></td><td>Beg<strong>ui</strong></td></tr>
                                <tr><td class="text-gray-400">Tu</td><td>Parl<strong>is</strong></td><td>Beg<strong>uis</strong></td></tr>
                                <tr><td class="text-gray-400">Ell</td><td>Parl<strong>i</strong></td><td>Beg<strong>ui</strong></td></tr>
                                <tr><td class="text-gray-400">Nos</td><td>Parl<strong>em</strong></td><td>Beg<strong>uem</strong></td></tr>
                                <tr><td class="text-gray-400">Vos</td><td>Parl<strong>eu</strong></td><td>Beg<strong>ueu</strong></td></tr>
                                <tr><td class="text-gray-400">Ells</td><td>Parl<strong>in</strong></td><td>Beg<strong>uin</strong></td></tr>
                            </tbody>
                        </table>

                        <p class="text-sm">El "mode de la irrealitat". S'utilitza després de "QUE".</p>

                        <div class="visual-card bg-teal-50 border-teal-200">
                            <span class="visual-emoji">✨🔮</span>
                            <span class="visual-title text-teal-700">SUBJUNTIU</span>
                            <span class="visual-desc">Mode de la Irrealitat. Després de "QUE".</span>
                            <div class="flex justify-center gap-4 mt-2 text-xs font-bold text-teal-600">
                                <span>🙏 DESIG</span>
                                <span>🤷 DUBTE</span>
                                <span>😡 EMOCIÓ</span>
                            </div>
                        </div>
                    </div>
                `,
    drills: [
{ t: 1, q: "Jo (voler - subj) →", a: "vulgui", h: "Irregular", e: "Subjuntiu irregular amb 'g'." },
{ t: 3, q: "Espero que ___ vulgui venir.", a: "ell", h: "Pronom (Masc)", e: "Jo/Ell vulgui." },
{ t: 1, q: "Ell (ser - subj) →", a: "sigui", h: "Irregular", e: "Ser -> Sigui." },
{ t: 2, q: "És important que tu (fer) això.", a: "És important que facis això.", h: "Subjuntiu obligatori", req: 'pos', e: "Fer -> Facis." },
{ t: 3, q: "No crec que ell ___ (saber) res.", a: "sàpiga", h: "Dubte", e: "Dubte demana subjuntiu: Sàpiga." }
    ]},
    14: {
    title: "Pronoms Relatius",
    color: "amber",
    desc: "Que, qui, el qual, on.",
    explanation: `
                     <div class="space-y-4">
                        <table class="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-sm exp-table mb-4">
                            <thead class="bg-amber-100 text-amber-800"><tr><th>Relatiu</th><th>Ús</th></tr></thead>
                            <tbody class="text-gray-700">
                                <tr><td class="font-bold">QUE</td><td>Coses i persones (Subjecte/Objecte directe).<br><em>El noi que canta.</em></td></tr>
                                <tr><td class="font-bold">QUI</td><td>Persones després de preposició.<br><em>La noia amb qui parlo.</em></td></tr>
                                <tr><td class="font-bold">ON</td><td>Llocs.<br><em>La casa on visc.</em></td></tr>
                                <tr><td class="font-bold">EL QUAL</td><td>Formal / Explicatiu.<br><em>El teu amic, el qual no conec...</em></td></tr>
                            </tbody>
                        </table>

                        <div class="visual-card bg-amber-50 border-amber-200">
                            <span class="visual-emoji">🔗🤝</span>
                            <span class="visual-title text-amber-700">RELATIUS</span>
                            <span class="visual-desc">Paraules que connecten frases com una cadena.</span>
                        </div>
                    </div>
                `,
    drills: [
{ t: 1, q: "El llibre ___ em vas donar. →", a: "que", h: "General", e: "'Llibre' no porta preposició aquí -> Que." },
{ t: 1, q: "El lloc ___ vaig viure. →", a: "on", h: "Lloc", e: "Antecedent de lloc -> On." },
{ t: 2, q: "L'amic amb ___ vaig parlar.", a: "qui", h: "Persona + Preposició", e: "Amb (prep) + Persona -> Qui." }
    ]},
    15: {
    title: "Passat Perifràstic",
    color: "indigo",
    desc: "Anar + Infinitiu (Oral).",
    explanation: `
                    <div class="space-y-4">
                         <table class="w-full text-center border-collapse bg-white rounded-lg overflow-hidden shadow-sm exp-table mb-4">
                            <thead class="bg-indigo-100 text-indigo-800">
                                <tr><th>Pronom</th><th>Conjugació</th></tr>
                            </thead>
                            <tbody class="text-gray-700">
                                <tr><td>Jo</td><td class="font-bold">Vaig + Cantar</td></tr>
                                <tr><td>Tu</td><td class="font-bold">Vas + Cantar</td></tr>
                                <tr><td>Ell/a</td><td class="font-bold">Va + Cantar</td></tr>
                                <tr><td>Nosaltres</td><td class="font-bold">Vam + Cantar</td></tr>
                                <tr><td>Vosaltres</td><td class="font-bold">Vau + Cantar</td></tr>
                                <tr><td>Ells/es</td><td class="font-bold">Van + Cantar</td></tr>
                            </tbody>
                        </table>

                        <div class="visual-card bg-indigo-50 border-indigo-200">
                            <span class="visual-emoji">📖🗣️</span>
                            <span class="visual-title text-indigo-700">PERIFRÀSTIC</span>
                            <span class="visual-desc">La forma més comuna d'explicar històries.</span>
                            <div class="bg-red-50 text-red-800 text-xs p-2 rounded mt-2 border border-red-100">
                                ⚠️ <strong>Ull!</strong> No és futur. "Vaig cantar" = "I sang" (Ahir).
                            </div>
                        </div>
                    </div>
                `,
    drills: [
{ t: 1, q: "Jo (parlar) →", a: "vaig parlar", h: "Anar + Inf", e: "Vaig (Anar present) + Parlar." },
{ t: 3, q: "___ vaig parlar amb ell ahir.", a: "jo", h: "Pronom", e: "'Vaig' és la forma de Jo." },
{ t: 1, q: "Nosaltres (estar) →", a: "vam estar", h: "Anar + Inf", e: "Vam (Nosaltres) + Estar." },
{ t: 2, q: "Ell fa els deures. (Passat)", a: "Ell va fer els deures.", h: "Transformació", req: 'pos', e: "Fa -> Va fer." },
{ t: 3, q: "Ahir ___ (sortir) de casa.", a: "vaig sortir", h: "Jo", e: "Anar + Infinitiu." }
    ]},
    16: {
    title: "Gènere i Nombre",
    color: "green",
    desc: "Concordança.",
    explanation: `
                    <div class="space-y-4">
                         <table class="w-full text-center border-collapse bg-white rounded-lg overflow-hidden shadow-sm exp-table mb-4">
                            <thead class="bg-green-100 text-green-800">
                                <tr><th></th><th>Singular</th><th>Plural</th></tr>
                            </thead>
                            <tbody class="text-gray-700">
                                <tr><td class="font-bold">Masculí</td><td>El gat negre</td><td>Els gats negres</td></tr>
                                <tr><td class="font-bold">Femení</td><td>La casa blanca</td><td>Les cases blanques</td></tr>
                            </tbody>
                        </table>

                        <p class="text-sm">En català, tot ha de coincidir: Article, Nom i Adjectiu.</p>

                        <div class="grid grid-cols-2 gap-4">
                            <div class="visual-card bg-blue-50 border-blue-200">
                                <span class="visual-emoji">🟦🟦</span>
                                <span class="visual-title text-blue-700">MASCULÍ</span>
                                <span class="visual-desc">Normalment acaba en consonant o -o.</span>
                            </div>
                            <div class="visual-card bg-pink-50 border-pink-200">
                                <span class="visual-emoji">🌸🌸</span>
                                <span class="visual-title text-pink-700">FEMENÍ</span>
                                <span class="visual-desc">Singular (-a) → Plural (-es).</span>
                                <em class="block text-xs mt-1">Casa → Cases</em>
                            </div>
                        </div>
                    </div>
                `,
    drills: [
{ t: 1, q: "La meva (casa/gran) →", a: "casa gran", h: "Fem. Sing.", e: "Casa (fem) -> Gran (invariable)." },
{ t: 1, q: "Els ___ (amic/simpàtic) →", a: "amics simpàtics", h: "Masc. Plural", e: "Amics (pl) Simpàtics (pl)." },
{ t: 2, q: "Plural: El cotxe blau.", a: "Els cotxes blaus.", h: "Tot plural", req: 'pos', e: "El->Els, Cotxe->Cotxes, Blau->Blaus." }
    ]},
    17: {
    title: "Preposicions",
    color: "pink",
    desc: "Per, per a, perquè...",
    explanation: `
                    <div class="space-y-4">
                        <table class="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-sm exp-table mb-4">
                            <thead class="bg-pink-100 text-pink-800"><tr><th>Preposició</th><th>Ús</th></tr></thead>
                            <tbody class="text-gray-700">
                                <tr><td class="font-bold">PER</td><td>Causa, Motiu, Mitjà.<br><em>Per tu. Per tren.</em></td></tr>
                                <tr><td class="font-bold">PER A</td><td>Finalitat, Destinatari.<br><em>Per a tu. Per a demà.</em></td></tr>
                                <tr><td class="font-bold">PERQUÈ</td><td>Conjunció (Because).<br><em>Perquè plou.</em></td></tr>
                            </tbody>
                        </table>

                        <div class="grid grid-cols-2 gap-4">
                            <div class="visual-card bg-pink-50 border-pink-200">
                                <span class="visual-emoji">🛤️🚂</span>
                                <span class="visual-title text-pink-700">PER</span>
                                <span class="visual-desc">El camí, el mitjà o la causa.</span>
                                <em class="block text-xs mt-1">"Vinc per tu"</em>
                            </div>
                            <div class="visual-card bg-purple-50 border-purple-200">
                                <span class="visual-emoji">🎁🏁</span>
                                <span class="visual-title text-purple-700">PER A</span>
                                <span class="visual-desc">El destí final o la meta.</span>
                                <em class="block text-xs mt-1">"És per a tu"</em>
                            </div>
                        </div>
                    </div>
                `,
    drills: [
{ t: 3, q: "Viatjo ___ feina.", a: "per", h: "Motiu", e: "Motiu/Causa = Per." },
{ t: 3, q: "Això és ___ tu.", a: "per a", h: "Destinatari", e: "Destinatari = Per a." },
{ t: 2, q: "No surto (perquè/ploure).", a: "No surto perquè plou.", h: "Causa", req: 'pos', e: "Perquè (sense espai) és 'because'." }
    ]},
    18: {
    title: "Condicional Compost",
    color: "yellow",
    desc: "Si hagués fet, hauria...",
    explanation: `
                    <div class="space-y-4">
                        <table class="w-full text-center border-collapse bg-white rounded-lg overflow-hidden shadow-sm exp-table mb-4">
                            <thead class="bg-yellow-100 text-yellow-800">
                                <tr><th>SI + Subjuntiu Imperfet</th><th>Condicional Compost</th></tr>
                            </thead>
                            <tbody class="text-gray-700">
                                <tr>
                                    <td>Si jo hagués tingut...</td>
                                    <td>jo hauria comprat...</td>
                                </tr>
                                <tr>
                                    <td>Si ell hagués vingut...</td>
                                    <td>nosaltres hauríem anat...</td>
                                </tr>
                            </tbody>
                        </table>

                         <div class="visual-card bg-yellow-50 border-yellow-200">
                            <span class="visual-emoji">⏳💥</span>
                            <span class="visual-title text-yellow-700">PASSAT IMPOSSIBLE</span>
                            <span class="visual-desc">Coses que no van passar.</span>
                            <em class="block text-xs mt-2 italic">"Si hagués estudiat (però no ho vaig fer), hauria aprovat."</em>
                        </div>
                    </div>
                `,
    drills: [
{ t: 1, q: "Jo (haver+ser cond) →", a: "hauria sigut", h: "Compost", e: "Hauria (Cond) + Sigut (Part)." },
{ t: 1, q: "Tu (haver+fer cond) →", a: "hauries fet", h: "Compost", e: "Hauries + Fet." },
{ t: 2, q: "Si hagués tingut temps...", a: "hauria anat al cinema.", h: "Irreal passat", req: 'pos', e: "Si hagués... hauria..." },
{ t: 3, q: "Si ___ (ser) ric, viuria a BCN.", a: "fos", h: "Imp. Subjuntiu", e: "Si + Imperfet Subjuntiu (Fos)." }
    ]}
};

const refHeaders = ["Pronom", "Present (Ser)", "Perifràstic (Anar)", "Perf (Fer)", "Futur", "Imp (Ser)", "Cond (Fer)", "Subj (Ser)", "Subj Imp", "Cond Comp", "Pres (Tenir)", "Pres (Poder)", "Pres (Anar)", "Pres (Fer)", "Regulars"];

    let activeQueue = [];
    let currentIndex = 0;
    let score = 0;
    let total = 0;
    let activeUnitColor = 'indigo';
    let currentUnitId = null;

    const els = {
    modal: document.getElementById('onboarding-modal'),
    selector: document.getElementById('unit-selector'),
    drillView: document.getElementById('drill-view'),
    unitGrid: document.getElementById('units-grid-container'),
    header: document.getElementById('app-header'),
    title: document.getElementById('unit-title'),
    subtitle: document.getElementById('unit-subtitle'),
    progress: document.getElementById('progress-bar'),
    count: document.getElementById('drill-count'),
    total: document.getElementById('total-drills'),
    card: document.getElementById('drill-card'),
    prompt: document.getElementById('current-prompt'),
    hint: document.getElementById('drill-hint'),
    badge: document.getElementById('drill-type-badge'),
    input: document.getElementById('user-input'),
    feedback: document.getElementById('feedback'),
    btn: document.getElementById('action-button'),
    giveUpBtn: document.getElementById('give-up-button'),
    refArea: document.getElementById('reference-area'),
    refHead: document.getElementById('ref-table-head'),
    expView: document.getElementById('explanation-view'),
    expTitle: document.getElementById('exp-title'),
    expSubtitle: document.getElementById('exp-subtitle'),
    expBody: document.getElementById('exp-body'),
    expBtn: document.getElementById('exp-start-btn'),
    expIconBg: document.getElementById('exp-icon-bg')
};

function init() {
    renderUnits();
    renderRefHeader();
    els.input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !els.btn.disabled) handleActionButton();
});
}

    function renderUnits() {
    let html = '';
    for (const [id, u] of Object.entries(units)) {
    html += `
                <div onclick="showExplanation(${id})" class="bg-white rounded-2xl p-5 shadow-md border-l-8 hover:shadow-xl transition cursor-pointer transform hover:-translate-y-1 border-${u.color}-500 group">
                    <div class="flex justify-between items-start">
                        <h3 class="text-xl font-bold text-gray-800 group-hover:text-${u.color}-600 transition-colors">${u.title}</h3>
                        <span class="bg-${u.color}-100 text-${u.color}-700 text-xs font-bold px-2 py-1 rounded-full">U${id}</span>
                    </div>
                    <p class="text-gray-500 text-sm mt-2 leading-relaxed">${u.desc}</p>
                </div>`;
}
    els.unitGrid.innerHTML = html;
}

    function renderRefHeader() {
    els.refHead.innerHTML = `<tr>${refHeaders.map(h => `<th scope="col" class="py-3 px-4 whitespace-nowrap">${h}</th>`).join('')}</tr>`;
}

    window.startLearning = () => {
    els.modal.classList.add('opacity-0', 'pointer-events-none');
    setTimeout(() => {
    els.modal.style.display = 'none';
    els.selector.classList.remove('hidden');
}, 300);
};

    window.showExplanation = (id) => {
    currentUnitId = id;

    if (id === 'all') {
    activeUnitColor = 'gray';
    initDrills();
    return;
}

    const u = units[id];
    activeUnitColor = u.color;

    els.expTitle.textContent = u.title;
    els.expSubtitle.textContent = u.desc;
    els.expBody.innerHTML = u.explanation;

    els.expIconBg.className = `w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-6 shadow-sm bg-${u.color}-100 text-${u.color}-600`;
    els.expBtn.className = `w-full py-4 px-6 text-white font-bold text-lg rounded-xl shadow-lg transition duration-200 hover:-translate-y-1 transform active:scale-95 bg-${u.color}-600 hover:bg-${u.color}-700`;

    els.selector.classList.add('hidden');
    els.expView.classList.remove('hidden');

    window.scrollTo(0,0);
};

    window.initDrills = () => {
    activeQueue = [];
    const id = currentUnitId;

  els.card.innerHTML = `
                <div id="drill-type-badge" class="mb-3 px-3 py-1 bg-white rounded-full text-xs font-bold uppercase tracking-wider shadow-sm text-gray-500 border border-gray-200">
                    Preparat?
                </div>
                <div id="current-prompt" class="text-2xl md:text-3xl font-bold text-gray-800 leading-tight mb-2">
                    Carregant...
                </div>
                <div id="drill-hint" class="text-sm text-gray-500 font-medium italic mt-2"></div>
            `;

    els.prompt = document.getElementById('current-prompt');
    els.hint = document.getElementById('drill-hint');
    els.badge = document.getElementById('drill-type-badge');

    if (id === 'all') {
    Object.values(units).forEach(u => activeQueue.push(...u.drills));
    activeUnitColor = 'gray';
    els.title.textContent = "Repàs Total";
    els.subtitle.textContent = "Totes les unitats barrejades";
} else {
    const u = units[id];
    activeQueue = [...u.drills];
    els.title.textContent = u.title;
    els.subtitle.textContent = u.desc;
}

    activeQueue.sort(() => Math.random() - 0.5);

    total = activeQueue.length;
    score = 0;
    currentIndex = 0;

    updateTheme(activeUnitColor);

    els.expView.classList.add('hidden');
    els.selector.classList.add('hidden');
    els.drillView.classList.remove('hidden');

    loadDrill();
};

    window.returnToSelector = () => {
    els.expView.classList.add('hidden');
    els.drillView.classList.add('hidden');
    els.selector.classList.remove('hidden');

    els.input.value = '';
    els.feedback.classList.add('hidden');
    els.refArea.classList.add('hidden');
};

    window.handleActionButton = () => {
    const state = els.btn.getAttribute('data-state');

    if (state === 'check') {
    checkAnswer();
} else if (state === 'next') {
    currentIndex++;
    loadDrill();
} else {
    window.returnToSelector();
}
};

    function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

    function getAdvice(drill) {
    if (drill.t === 1) return "Mira bé el subjecte (qui fa l'acció). El verb ha de canviar la seva forma per coincidir-hi.";
    if (drill.t ===   2) return "Això és un joc de transformació. Si et pregunten, respon canviant el sentit (Sí ↔ No).";
    return "Falta una peça clau. Sol ser una paraula petita (com un pronom o una preposició) que lliga la frase.";
}

    window.handleGiveUp = () => {
    const drill = activeQueue[currentIndex];
    const advice = getAdvice(drill);

    let rawExplanation = drill.e ? drill.e : "Revisa la taula de referència.";

    const answerToHide = drill.a;
    const regex = new RegExp(escapeRegExp(answerToHide), 'gi');
    const safeExplanation = rawExplanation.replace(regex, "___");

    let thinkingPattern;

    if (drill.t === 1) {
    let subj = "Ell/Ella";
    let verbEx = "Canta";
    const q = drill.q.toLowerCase();

    if (q.includes("jo")) { subj = "Jo"; verbEx = "Canto"; }
    else if (q.includes("tu")) { subj = "Tu"; verbEx = "Cantes"; }
    else if (q.includes("nosaltres")) { subj = "Nosaltres"; verbEx = "Cantem"; }
    else if (q.includes("vosaltres")) { subj = "Vosaltres"; verbEx = "Canteu"; }
    else if (q.includes("ells") || q.includes("elles")) { subj = "Ells"; verbEx = "Canten"; }

    thinkingPattern = `
                    <div class="mt-3 text-xs text-gray-500 bg-gray-50 p-3 rounded border border-gray-100 text-left">
                        <strong class="text-indigo-600 block mb-1">🧠 Exemple de raonament:</strong>
                        <span class="block mb-2">Imagina que el verb fos <em>"Cantar"</em> (Regular).</span>
                        <ul class="space-y-1 ml-2 border-l-2 border-indigo-200 pl-2">
                            <li>1. Subjecte de la frase: <strong>${subj}</strong></li>
                            <li>2. Patró del verb model: <strong>${subj} ${verbEx}</strong></li>
                            <li>3. Ara aplica-ho al verb <strong>${drill.q.match(/\((.*?)\)/)?.[1] || 'de la frase'}</strong>.</li>
                        </ul>
                    </div>`;

} else if (drill.t === 2) {
   const isQuestion = drill.q.includes('?');

    if (isQuestion) {
    thinkingPattern = `
                        <div class="mt-3 text-xs text-gray-500 bg-gray-50 p-3 rounded border border-gray-100 text-left">
                            <strong class="text-indigo-600 block mb-1">🧠 Exemple de raonament (Diàleg):</strong>
                            <span class="block mb-1">Si jo et pregunto: <em>"Vols (Tu) cafè?"</em></span>
                            <ul class="space-y-1 ml-2 border-l-2 border-indigo-200 pl-2">
                                <li>1. Qui respon? <strong>Jo</strong>.</li>
                                <li>2. Canvia el verb: <em>"Sí, (Jo) vull cafè"</em>.</li>
                            </ul>
                            <em class="block mt-2 text-gray-400 font-medium">Canvia el punt de vista (Tu ↔ Jo).</em>
                        </div>`;
} else {
    thinkingPattern = `
                        <div class="mt-3 text-xs text-gray-500 bg-gray-50 p-3 rounded border border-gray-100 text-left">
                            <strong class="text-indigo-600 block mb-1">🧠 Exemple de raonament (Temps):</strong>
                            <span class="block mb-1">Si la frase és: <em>"Ell menja (Present)"</em></span>
                            <ul class="space-y-1 ml-2 border-l-2 border-indigo-200 pl-2">
                                <li>1. Mantingues la persona (Ell).</li>
                                <li>2. Canvia només el temps (Passat): <em>"Ell va menjar"</em>.</li>
                            </ul>
                        </div>`;
}

} else {
    thinkingPattern = `
                    <div class="mt-3 text-xs text-gray-500 bg-gray-50 p-3 rounded border border-gray-100 text-left">
                        <strong class="text-indigo-600 block mb-1">🧠 Exemple de raonament:</strong>
                        <span class="block mb-1">Fes de detectiu. Mira les paraules del voltant.</span>
                        <ul class="space-y-1 ml-2 border-l-2 border-indigo-200 pl-2">
                            <li>Si veus <strong>"Jo"</strong> → El verb acaba sovint en <strong>-o</strong> o <strong>-ic</strong>.</li>
                            <li>Si veus <strong>"Tu"</strong> → El verb acaba sovint en <strong>-s</strong>.</li>
                        </ul>
                        <em class="block mt-2 text-gray-400 font-medium">Busca la concordança!</em>
                    </div>`;
}

    els.feedback.innerHTML = `
                <div class="text-left bg-blue-50 p-5 rounded-2xl border-2 border-blue-100 relative mt-4 shadow-sm">
                    <div class="absolute -top-3 left-6 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm flex items-center gap-1">
                        <span>👋</span> Un amic et diu:
                    </div>

                    <p class="text-gray-700 mb-2 mt-2 text-sm leading-relaxed font-medium">
                        "${advice}"
                    </p>

                    ${thinkingPattern}

                    <div class="bg-white p-4 rounded-xl border-l-4 border-yellow-400 shadow-sm flex items-start gap-3 mt-4">
                        <span class="text-2xl shrink-0">💡</span>
                        <div>
                            <strong class="block text-gray-900 text-xs uppercase mb-1 tracking-wider">La Pista Clau</strong>
                            <span class="text-gray-800 text-sm">${safeExplanation}</span>
                        </div>
                    </div>

                    <div class="mt-4 text-center">
                        <span class="text-[10px] font-bold text-blue-400 uppercase tracking-widest bg-white px-2 py-1 rounded-full border border-blue-100">Ara torna-ho a provar! 👇</span>
                    </div>
                </div>
            `;

    els.feedback.classList.remove('hidden', 'bg-green-100', 'bg-red-50', 'border-green-200', 'border-red-100');
    els.feedback.classList.add('animate-fade-in');

    els.input.focus();

    els.input.classList.remove('border-gray-200');
    els.input.classList.add('ring-4', 'ring-yellow-100', 'border-yellow-400', 'transition-all', 'duration-500');

    setTimeout(() => {
    els.input.classList.remove('ring-4', 'ring-yellow-100', 'border-yellow-400');
    els.input.classList.add('border-gray-200');
}, 1500);

    els.giveUpBtn.disabled = true;
    els.giveUpBtn.classList.add('opacity-50', 'cursor-not-allowed');
}

    window.toggleReference = () => {
    els.refArea.classList.toggle('hidden');
    const isHidden = els.refArea.classList.contains('hidden');
    document.getElementById('ref-toggle-icon').textContent = isHidden ? 'Show' : 'Hide';
};

    function updateTheme(color) {
    els.header.className = els.header.className.replace(/bg-\w+-600/g, '');
    els.progress.className = els.progress.className.replace(/bg-\w+-500/g, '');

    els.header.classList.add(`bg-${color}-600`);
    els.progress.classList.add(`bg-${color}-500`);
}

    function loadDrill() {
    if (currentIndex >= total) {
    finishDrill();
    return;
}

    const drill = activeQueue[currentIndex];

    els.input.value = '';
    els.input.disabled = false;
    els.input.classList.remove('hidden');
    els.input.classList.remove('text-indigo-600', 'bg-indigo-50', 'border-indigo-300', 'bg-green-50', 'text-green-800', 'border-green-500', 'bg-red-50', 'text-red-800', 'border-red-500', 'ring-4', 'ring-yellow-100', 'border-yellow-400');
    els.input.focus();
    els.input.className = "w-full p-4 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-200 text-center font-medium";

    els.feedback.classList.add('hidden');
    els.card.classList.remove('bg-green-50', 'bg-red-50');
    els.card.classList.add('bg-gray-50');

    els.prompt.innerHTML = drill.q.replace(/\((.*?)\)/g, `<span class="text-${activeUnitColor}-600 font-semibold">($1)</span>`);
    els.hint.textContent = drill.h;

    let typeText = "Conjugació";
    if (drill.t === 2) typeText = drill.req === 'neg' ? "Transformació (Negativa)" : "Transformació (Afirmativa)";
    if (drill.t === 3) typeText = "Completa la frase";
    els.badge.textContent = typeText;
    els.badge.className = `mb-3 px-3 py-1 bg-white rounded-full text-xs font-bold uppercase tracking-wider shadow-sm border text-${activeUnitColor}-600 border-${activeUnitColor}-200`;

    els.btn.classList.remove('hidden');
    els.btn.textContent = "Comprova";
    els.btn.setAttribute('data-state', 'check');
    els.btn.disabled = false;
    els.btn.className = `w-2/3 py-4 px-6 font-bold text-lg rounded-xl shadow-lg transition-all duration-200 bg-${activeUnitColor}-600 text-white hover:bg-${activeUnitColor}-700 hover:-translate-y-0.5`;

    els.giveUpBtn.disabled = false;
    els.giveUpBtn.classList.remove('opacity-50', 'cursor-not-allowed', 'hidden');
    els.giveUpBtn.innerHTML = '<span>🤷</span> <span class="hidden md:inline">No ho sé</span><span class="md:hidden">Ajuda</span>';

    updateProgress();
}

    function checkAnswer() {
    const drill = activeQueue[currentIndex];
    const userRaw = els.input.value.trim();
    const userClean = cleanString(userRaw);
    const answerClean = cleanString(drill.a);

    if (!userClean) {
    els.input.parentElement.classList.add('shake-animation');
    setTimeout(() => els.input.parentElement.classList.remove('shake-animation'), 300);
    return;
}

    els.input.disabled = true;
    els.feedback.classList.remove('hidden');
    els.giveUpBtn.disabled = true;

    const isCorrect = userClean === answerClean;

    if (isCorrect) {
    score++;
    const niceWork = "Molt bé! Ho has clavat.";
    els.feedback.innerHTML = `
                    <div class="text-green-800">
                        <div class="font-bold text-lg mb-1">✅ Correcte!</div>
                        <div class="text-sm opacity-80">${niceWork}</div>
                    </div>
                `;
    els.feedback.className = "p-4 rounded-xl text-center font-bold bg-green-100 text-green-700 border border-green-200 mb-4 animate-fade-in";
    els.input.classList.replace('border-gray-200', 'border-green-500');
    els.input.classList.add('bg-green-50', 'text-green-800');
    els.card.classList.replace('bg-gray-50', 'bg-green-50');
} else {
    const advice = getAdvice(drill);
    const explanation = drill.e ? drill.e : "Revisa l'estructura a la taula.";

    els.feedback.innerHTML = `
                    <div class="text-left bg-red-50 p-5 rounded-2xl border-2 border-red-100 relative mt-4 shadow-sm">
                        <div class="absolute -top-3 left-6 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm flex items-center gap-1">
                            <span>😅</span> Ups! Quasi...
                        </div>

                        <p class="text-gray-700 mb-4 mt-2 text-sm leading-relaxed font-medium">
                            "No és ben bé això. ${advice}"
                        </p>

                        <div class="bg-white p-3 rounded-xl border-l-4 border-red-400 shadow-sm mb-3">
                            <strong class="block text-gray-900 text-xs uppercase mb-1 tracking-wider">Solució Correcta</strong>
                            <span class="text-xl text-red-700 font-bold select-all">${drill.a}</span>
                        </div>

                        <div class="text-sm text-gray-600 pl-2 border-l-2 border-red-200">
                            <strong>Per què?</strong> ${explanation}
                        </div>
                    </div>
                `;
    els.feedback.className = "mb-4 animate-fade-in";
    els.input.classList.replace('border-gray-200', 'border-red-500');
    els.input.classList.add('bg-red-50', 'text-red-800');
    els.card.classList.replace('bg-gray-50', 'bg-red-50');
}

    els.btn.textContent = "Següent →";
    els.btn.setAttribute('data-state', 'next');
    els.btn.className = "w-2/3 py-4 px-6 font-bold text-lg rounded-xl shadow-lg transition-all duration-200 bg-gray-800 text-white hover:bg-gray-900 hover:-translate-y-0.5";

    updateProgress();
}

    function finishDrill() {
    let nextUnitId = null;
    if (currentUnitId !== 'all') {
    const possibleNext = parseInt(currentUnitId) + 1;
    if (units[possibleNext]) nextUnitId = possibleNext;
}

    const restartArg = currentUnitId === 'all' ? "'all'" : currentUnitId;
    const cardColor = activeUnitColor;

    els.card.innerHTML = `
                <div class="text-6xl mb-4">🎉</div>
                <h3 class="text-2xl font-bold text-gray-800">Unitat Completada!</h3>
                <p class="text-lg mt-2 text-gray-600 mb-6">Resultat final: <span class="font-bold text-${cardColor}-600">${score} / ${total}</span></p>

                <div class="flex flex-col gap-3 w-full max-w-xs mx-auto">
                    <button onclick="showExplanation(${restartArg})" class="w-full py-3 px-4 bg-${cardColor}-100 text-${cardColor}-700 font-bold rounded-xl hover:bg-${cardColor}-200 transition-colors">
                        🔄 Repetir Unitat
                    </button>
                    ${nextUnitId ? `
                    <button onclick="showExplanation(${nextUnitId})" class="w-full py-3 px-4 bg-${cardColor}-600 text-white font-bold rounded-xl hover:bg-${cardColor}-700 transition-colors shadow-lg hover:-translate-y-0.5 transform">
                        Següent Unitat ➡
                    </button>` : ''}
                    <button onclick="returnToSelector()" class="w-full py-3 px-4 text-gray-400 font-bold rounded-xl hover:text-gray-600 hover:bg-gray-50 transition-colors">
                        Torna al Menú
                    </button>
                </div>
            `;

    els.btn.classList.add('hidden');
    els.input.classList.add('hidden');
    els.feedback.classList.add('hidden');
    els.giveUpBtn.classList.add('hidden');
}

    function cleanString(str) {
    return str.toLowerCase()
    // Simplified regex: removed duplicate '!' and redundant escapes
    .replace(/[.,\/#!$%^*;:{}=\-_`~()?’]/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

    function updateProgress() {
    els.count.textContent = score;
    els.total.textContent = total;
    const pct = total > 0 ? (currentIndex / total) * 100 : 0;
    els.progress.style.width = `${pct}%`;
}

    init();

