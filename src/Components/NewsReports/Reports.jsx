import React from 'react'

function Reports() {
  return (
    <>
    <div style={{'marginTop': '30px', 'marginBottom': '40px'}}>
        <header>
          <h1>
            The 2016 Presidential Campaign Hacking
          </h1>
        </header>
        <main style={{ 'display': 'flex', 'flexDirection': 'column','justifyContent': 'center', 'alignItems': 'center' }}>
            <h2>
              The beginning of a Scandal
            </h2>
            <p>
              During the 2016 American presidential campaign there was incidents of hacking between<br /> Donald Trump and Hillary Clinton.
            </p>
            <p style={{'maxWidth': '650px'}}>
              In this report made by your favorite reporter Emmanuel Urias I will go over the details of this cyber attack like the type of attack, how vulnerabilities were discovered, how attackers exploited these vulnerabilities, and what could have been done to prevent these attacks.
            </p>
            <p style={{'maxWidth': '850px', 'fontSize': '20px'}}>
            Nearing the end of 2015 there was a breach at the DNC's IT department made by Russian hackers. The FBI warned the IT department about this breach but for some unknown reason this warning wasn't taken seriously and the message never spread. But this would be only one of many human negligences to come. In the Spring of 2016, hackers tricked Hillary Clinton's campaign chairman John Podesta and managed to get his email password. The hackers later used this email to send out "spear-phishing emails" to dozens of Clinton staffers where they got access to 33 DNC computers which they used to steal thousands of emails from the DNC server. These stolen emails were posted on WikiLeaks where some awkward information was exposed. Shortly after the FBI started to conduct an investigation into the hack. Unfortunately, the hackers continued to leak thousands of emails over the coming months. This cyber attack was one piece in a series of suspicious activities but there is a lot to learn from this. The type of attack that initialized this was a phishing attack where a leader/boss's information was compromised and it led to a domino effect that led to multiple computers being compromised. The specific vulnerability is something we can describe as the lack of cyber security knowledge, if only the people of these organizations knew about the risks of giving up info on sketchy websites or clicking weird links it is highly probable that most of this could have been avoided. Hackers used this lack of cyber security knowledge to get into the computers of these employees and steal info like emails to potentially sway the results of the 2016 election. And a reality of this situation is that if the people that were compromised had a deeper understanding of cyber security they would have been more cautious with their info and this would have been avoided.
            </p>
        </main>
    </div>
        <div style={{'marginTop': '30px', 'marginBottom': '40px'}}>
        <header>
          <h1>
            Broadvoice Scandal
          </h1>
        </header>
        <main style={{ 'display': 'flex', 'flexDirection': 'column','justifyContent': 'center', 'alignItems': 'center' }}>
            <h2>
              The beginning of a Scandal, yes another Scandal
            </h2>
            <p>
              Over 350 million customer details were leaked in Broadvoice scandal
            </p>
            <p style={{'maxWidth': '650px'}}>
              In this report made by your favorite reporter Emmanuel Urias I will go over the details of this cyber attack like the type of attack, how vulnerabilities were discovered, how attackers exploited these vulnerabilities, and what could have been done to prevent these attacks.
            </p>
            <p style={{'maxWidth': '850px', 'fontSize': '20px'}}>
            A large VioP provider by the name of Broadvoice made a grave error leaving sensitive info open for unauthorized and malicious users to infiltrate. This all happened when Broadvoice left one of their database clusters was left open without any authentication required to access the info. This said info includes the names, phone numbers, and call transcripts. If you wonder why Broadvoice would store info like this they claim to store it to gauge basic interactions for analytics and call-center quality control and some other things. this leak creates an obvious discomfort for the users of this VioP provider because for a while anyone had the ability to violate their privacy but this also creates a hazard for the users too. This info left unguarded can be used in phishing cyber attacks to trick these users to give up even more info and potentially leave them open to a whole world of dangers like being robbed or blackmail to name a few, not only this but in the leaked call transcripts there was information like medical prescriptions and loan inquiries making phishing attacks very convincing. This vulnerability was discovered by a security consultant alongside a technology research firm where they discovered a whole database containing 350 million users' info completely open. Any attacker could access this info and begin a phishing campaign to get even more info from these exposed users. And unfortunately, a layer of security like authentication which is basic cyber security would have kept this user data much more secure from potential leaks, to summarize this error was a case of negligence since nine other database clusters were not left exposed like this. Yet, they quickly fixed their mistake and as of now it is unlikely that anyone was able to use this data for phishing attacks.
            </p>
        </main>
    </div>
    </>
  )
}

export default Reports