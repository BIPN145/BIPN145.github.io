#  Neuromembrane

:::{admonition} About Neuromembrane
:class: seealso, dropdown
**Neuromembrane** was made by a team of University of Alberta researchers and a company known as Atmist. Many thanks to Christelle Sabatier, Michael Wright, and Declan Ali for sharing similar lesson plans. Their ideas are integrated here.
:::

## Part I: Resting membrane potential

First, we’ll explore the properties of the membrane that lead to a resting membrane potential. By the end of this part, you will be able to:

* Explain how a negative resting membrane potential is maintained  
* Identify the factors that determine and maintain resting membrane potential  
* Use the Goldman-Hodgkin-Katz to calculate the membrane potential given the concentrations and permeabilities of K+ and Na+  
* Generate simulation data to illustrate the dependence of the resting membrane potential on K+

### Protocol

1. Go to [https://neuromembrane.biology.ualberta.ca/](https://neuromembrane.biology.ualberta.ca/) and click "Continue to App."

2. To open the resting membrane potential simulation, click on the top left to open a menu of stimulations. Choose “Resting Potential Simulation.” 

   On the right hand side, you’ll see a membrane. The area below the membrane is the inside of the cell. The area above the membrane is the outside of the cell.

3. This simulation will open by default without any leak channels or pumps. Let’s first add a couple of leak channels to the membrane and observe what happens. Click the plus sign next to “LEAK CHANNELS” to add a Na+ and K+ channel to the membrane. 

These single channels represent many, many channels in the membrane that are allowing either Na+ or K+ to cross. By default, these will open with a relative permeability of 5:100 (Na:K). Note also that the concentration settings are also set for you — at first, there is equal [Na+] and [K+] inside and outside of the membrane.

4. First, we’ll observe what happens when we have more K+ permeability, but equal ion concentrations. Click on “CREATE SIMULATION” to open the stimulation page. **Before running the simulation, write a 1-2 sentence prediction for what will happen in Table 1.**

5. To run Simulation #1, click the play button. You can also change the speed so that it will run faster. **What happens to the voltage over time? Why is the voltage across the membrane this value? Write your observations in Table 1.**

6. Go back to the Settings page by choosing “Back to settings” in the simulation play menu.

7. In order to modify the concentration across the membrane, we’ll need a Na+/K+ pump.
   Click the plus button next to Na+/K+ pump to add one to the membrane.

8. Notice that the CONCENTRATION SETTINGS have now changed as well.  Change these concentrations back to the previous settings — where all of the concentrations are 50 mM. **Before running Simulation #2, write your 1-2 sentence prediction in Table 1.**

9. Run Simulation #2 and observe what happens to the membrane potential. **Has adding a Na+/K+ pump changed anything about the resting membrane potential? Why or why not? Add your observations to the table.** For this simulation, note that we’re just using the Na/K pump to be able to change the concentration across the membrane. The Na/K is not operational (yet).

10. Go back to the settings page. In real neurons, ion concentrations are not equivalent. Change the concentrations of K+ and Na+ back to their default values to reflect more biological values across the membrane. **Write your prediction for Simulation #3 in the table.**

11. Run the simulation again and observe what happens to the membrane potential. 

:::{admonition} Log your predictions
:class: tip 
What happens to the voltage over time? Why is the voltage across the membrane this value? Write your observations in a table formatted to one like Table 1, below. Here is a [Google Spreadsheet Template](https://docs.google.com/spreadsheets/d/1Jg2RWFHUMrMBwb_iIrArJ1SlwGvIHXGjixTGJQ5B9s0/edit?usp=sharing).
:::

**Table 1. Simulation predictions & observations**

| Sim # | Types of Channels | [Ion] | PNa/K | Prediction | Observation |
|:---:|---|---|---|---|---|
| 1 | Leak channels only | All 50 mM | 5 Na+; 100 K+ | | |
| 2 | Leak channels & Na+/K+ pump | All 50 mM | 5 Na+; 100 K+ | | |
| 3 | Leak channels & Na+/K+ pump | Na+ high outside; K+ high inside | 5 Na+; 100 K+ | | |
| 4 | Leak channels & Na+/K+ pump | Na+ high outside; K+ high inside | 100 Na+; 5 K+ | | |
| 5 | Leak channels & Na+/K+ pump | Na+ high outside; K+ high inside | 100 Na+; 100 K+ | | |

12. Using the Goldman-Hodgkin-Katz (GHK) equation for Na+ and K+ only, calculate what the voltage across the membrane should be for simulation #3 and show your work. Does this match the voltage in the simulation? **Answer Q1 on the quiz. Report your answer in mV.**

**Here are a few hints to help you:**

* P is relative permeability; other constants can be found on the lecture slides.
* To simplify, you may determine a constant for the first portion of the equation (RT/F) and use that for future calculations.
* You can use “Insert > Equation” in Google Docs or Microsoft Word to show your work, or simply jot it on paper, take a picture, and paste it here.
* Google search has a built-in scientific calculator! You can bring it up by typing any formula into the search bar. For example, type `=5*150` into Google Search.

:::{admonition} Q1. Calculation of GHK
:class: attention
Using the GHK equation for Na⁺ and K⁺ only, calculate the voltage across the membrane for simulation #3 and show your work. Does this match the voltage in the simulation? Report your answer in mV.
:::

13. Finally, let’s check to see how much ion permeability matters. Go back to the settings page and reverse the Na+ and K+ permeabilities.

14. Write your prediction for Simulation #4 in Table 1.

15. Run Simulation #4 and observe what happens. Record your observations in Table 1 and respond to the question below. **Answer Q2 on the quiz. Report your answer in mV.**

:::{admonition} Q2.
:class: attention
With the high permeability to Na⁺ and low permeability to K⁺, what is the resting membrane potential? Report your value in mV out to one decimal point.
:::

16. On the settings page, set both the Na+ and K+ permeabilities to 100. Write your prediction in Table 1.

17. Run the simulation to see what happens, record your observations, and respond to the question below. **Answer Q3 on the quiz.**

:::{admonition} Q3.
:class: attention
Which of these simulations best models a typical neural membrane?
:::

18. Next, we’ll check to see whether or not the membrane potential depends on [K+]out. Reset the permeabilities and ion concentrations to the default values.

19. Systematically change [K+]out to fill in the table below. Hint: if you hover over the chart on the left, you’ll be able to see the precise voltage. 

:::{admonition} Q4
Complete Table 2 and then answer Q4 on the quiz. [You can use the Table 2 tab on the Google Spreadsheet template](https://docs.google.com/spreadsheets/d/1Jg2RWFHUMrMBwb_iIrArJ1SlwGvIHXGjixTGJQ5B9s0/edit?usp=sharing).
::: 

**Table 2. Dependence of Vrest on [K+]out**

| [K+]out (mM) | Vrest (mV) |
| :---: | :---: |
| 4 |  |
| 10 |  |
| 20 |  |
| 50 |  |
| 200 |  |

20. Click the “Toggle Circuit Diagram” button on the top right hand corner to overlay circuit components.

:::{admonition} Q5.
:class: attention
In a few words, describe what each of the following are modeling in the neuron. The first one has been done for you. Once you're done, answer Q5 on the quiz.

| Component | What it models |
|---|---|
| **I_Na** | sodium current across the membrane |
| **g_Na** | |
| **E_Na** | |
| **I_K** | |
| **g_K** | |
| **E_K** | |

---

## Part II: Passive membrane simulation

In this part, you’ll set up a simulation that models one portion of an axon or dendrite. By the end of this part, you will be able to:

* Describe how voltage passively spreads through an axon or dendrite  
* Understand length and time constants  
* Determine how the passive spread of voltage is affected by diameter and membrane capacitance

### Protocol

1. Go to  [https://neuromembrane.biology.ualberta.ca/](https://neuromembrane.biology.ualberta.ca/) (if you’re not already there) and open up the “Passive Membrane Simulation” (or Cable Theory Simulation)  in the menu in the top left corner.

2. Add an external recording electrode that is two length constants () away from your stimulating electrode by clicking the **\+** button and changing the value after the second recording site. **Answer Q6 on the quiz.**
   

:::{admonition} Q6.
:class: attention
Before running the simulation or changing any parameters, describe the setup of this “experiment” in 1-2 sentences.
:::

3. Click the “Toggle Circuit Diagram” button on the top right hand corner to overlay circuit components. **Answer Q7 on the quiz.**

:::{admonition} Q7.
:class: tip
Describe what this circuit diagram is showing us. Be sure to define each of the different components (r_m, r_i, c_m).
:::

4. Re-set the cable settings and click on “CREATE SIMULATION” to run our first iteration of this passive current injection. The current will be injected starting at 10 ms, and will be injected for 30 ms total. Observe the top plot to fill out row one in Table 3\. For your “observations,” take a close look at the Voltage vs. Time plot.

:::{admonition} Reflection
:class: tip
 Why is our current injection this shape when recorded across the membrane?
:::

**Table 3\. Current injection results**

| Sim \# | Diameter | Cm | Peak voltage at 2 | Distance to 2 electrode | Voltage at 0 electrode @ 28 ms | Voltage at 2 electrode @ 28 ms | Observations |
| :---: | :---: | :---: | ----- | ----- | ----- | ----- | ----- |
| 1 | 5 µm | 1 |  |  |  |   |  |
| 2 | 2 µm | 1 |  |  |  |  |  |
| 3 | 2 µm | 2 |  |  |  |  |  |

5. The dorsal root ganglion axon of a giant blue whale has a diameter of \~2 µm. In the CABLE SETTINGS on the left, change the diameter of the simulated axon to model this axon. 

:::{admonition} Reflection
:class: tip
With this smaller diameter of 2 µm, do other parameters of the membrane (bottom of the CABLE SETTINGS window) change? If so, why?
:::

6. Run the simulation with the smaller diameter and observe the Voltage vs Time plot again. Hint: you can use the Autoscale button (![][image2]) if the trace goes off the plot. Fill out Table 3 for this 2 µm cable simulation.

7. Double the capacitance of the membrane, from 1 to 2 μF/cm2. Describe what happens to the time constant and the resulting voltage over time plot with more capacitance in Table 3\.

Optional: Later in the course, you may want to use the Neuromembrane simulator to model the action potential. There is a [protocol here](https://docs.google.com/document/d/14yS7gj4IyZvIWO3KI5tqYkXIkytr7Y8ES7v4SbK9quM/edit?tab=t.0#heading=h.z78xt7uiejq). 