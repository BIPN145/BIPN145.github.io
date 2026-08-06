# Modeling Neural Membranes

**In this lab, we’ll use an online membrane simulator and a breadboard to model the properties of neural membranes and passive potentials.**

## Neuromembrane

Neuromembrane was made by a team of University of Alberta researchers and a company known as Atmist. Many thanks to Christelle Sabatier, Michael Wright, and Declan Ali for sharing similar lesson plans. Their ideas are integrated here.

---

### Part I: Resting membrane potential

First, we’ll explore the properties of the membrane that lead to a resting membrane potential. By the end of this part, you will be able to:

* Explain how a negative resting membrane potential is maintained  
* Identify the factors that determine and maintain resting membrane potential  
* Use the Goldman-Hodgkin-Katz to calculate the membrane potential given the concentrations and permeabilities of K+ and Na+  
* Generate simulation data to illustrate the dependence of the resting membrane potential on K+

### Steps

1. Go to [https://neuromembrane.biology.ualberta.ca/](https://neuromembrane.biology.ualberta.ca/) and log in as a guest.

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

11. Run the simulation again and observe what happens to the membrane potential. **What happens to the voltage over time? Why is the voltage across the membrane this value? Write your observations in Table 1.**

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
* Google search has a built-in scientific calculator! You can bring it up by typing any formula into the search bar. For example:

   ![][image1]

:::{admonition} Q1. Calculation of GHK
:class: tip
Using the GHK equation for Na⁺ and K⁺ only, calculate the voltage across the membrane for simulation #3 and show your work. Does this match the voltage in the simulation? Report your answer in mV.
:::

13. Finally, let’s check to see how much ion permeability matters. Go back to the settings page and reverse the Na+ and K+ permeabilities.

14. Write your prediction for Simulation #4 in Table 1.

15. Run Simulation #4 and observe what happens. Record your observations in Table 1 and respond to the question below. **Answer Q2 on the quiz. Report your answer in mV.**

:::{admonition} Q2.
:class: tip
With the high permeability to Na⁺ and low permeability to K⁺, what is the resting membrane potential? Report your value in mV out to one decimal point.
:::

16. On the settings page, set both the Na+ and K+ permeabilities to 100. Write your prediction in Table 1.

17. Run the simulation to see what happens, record your observations, and respond to the question below. **Answer Q3 on the quiz.**

:::{admonition} Q3.
:class: tip
Which of these simulations best models a typical neural membrane?
:::

18. Next, we’ll check to see whether or not the membrane potential depends on [K+]out. Reset the permeabilities and ion concentrations to the default values.

19. Systematically change [K+]out to fill in the table below. Hint: if you hover over the chart on the left, you’ll be able to see the precise voltage. **Answer Q4 on the quiz.**

**Table 2. Dependence of Vrest on [K+]out**

| [K+]out (mM) | Vrest (mV) |
| :---: | :---: |
| 4 |  |
| 10 |  |
| 20 |  |
| 50 |  |
| 200 |  |

20. Click the “Toggle Circuit Diagram” button on the top right hand corner to overlay circuit components. **Answer Q5 on the quiz**.  You can also fill out the table below for your own notes.

:::{admonition} Q5.
:class: tip
In a few words, describe what each of the following are modeling in the neuron. The first one has been done for you.

| Component | What it models |
|---|---|
| **I_Na** | sodium current across the membrane |
| **g_Na** | |
| **E_Na** | |
| **I_K** | |
| **g_K** | |
| **E_K** | |
:::

---

### Part II: Passive membrane simulation

In this part, you’ll set up a simulation that models one portion of an axon or dendrite. By the end of this part, you will be able to:

* Describe how voltage passively spreads through an axon or dendrite  
* Understand length and time constants  
* Determine how the passive spread of voltage is affected by diameter and membrane capacitance

### Steps

1. Go to  [https://neuromembrane.biology.ualberta.ca/](https://neuromembrane.biology.ualberta.ca/) (if you’re not already there) and open up the “Passive Membrane Simulation” (or Cable Theory Simulation)  in the menu in the top left corner.

2. Add an external recording electrode that is two length constants () away from your stimulating electrode by clicking the **\+** button and changing the value after the second recording site. **Answer Q6 on the quiz.**

   

:::{admonition} Q6.
:class: tip
Before running the simulation or changing any parameters, describe the setup of this “experiment” in 1-2 sentences.
:::

3. Click the “Toggle Circuit Diagram” button on the top right hand corner to overlay circuit components. **Answer Q7 on the quiz.**

:::{admonition} Q7.
:class: tip
Describe what this circuit diagram is showing us. Be sure to define each of the different components (r_m, r_i, c_m).
:::

4. Re-set the cable settings and click on “CREATE SIMULATION” to run our first iteration of this passive current injection. The current will be injected starting at 10 ms, and will be injected for 30 ms total. Observe the top plot to fill out row one in Table 3\. For your “observations,” take a close look at the Voltage vs. Time plot. **Why is our current injection this shape when recorded across the membrane?**

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

Optional: Later in the course, you may want to use the Neuromembrane simulator to model [action potential](https://docs.google.com/document/d/14yS7gj4IyZvIWO3KI5tqYkXIkytr7Y8ES7v4SbK9quM/edit?tab=t.0#heading=h.z78xt7uiejq). 

---

## RC Circuits

Let’s build a circuit that models the passive membrane simulations you performed above. 

### Building an RC Circuit

Read pages 4-7 of the RC circuit lab exercise in your lab manual. Then, build the circuit below. We’ll use the OUTPUT of your Powerlab to send a pulse of current through the circuit. 

1. It helps to start with the output ends in the power rails and work your way around. The **red** wire from the PowerLab is the positive terminal. 

   **CAUTION**: Do not connect the \+ and \- terminals. This will short the circuit, heat, and melt the plastic. Check that your circuit is set up properly before turning on the pulse from your computer.

2. Attach single BNC adapters to the \+ and \- outputs of the PowerLab.  
   1. Alternatively, connect a **BNC to double banana cable adapter** to the \+ output of your PowerLab.   
3. Attach a red banana cable to the \+ terminal and a black banana cable to the \- terminal of your PowerLab.   
4. Attach the banana cables to red and black jumper wires using alligator clips, and insert the black and red jumper wires to the power rails, as shown in the circuit. 

   **NOTE:** Ensure that all circuit components are properly inserted into the breadboard. The wires should make contact with the metal strips inside the breadboard. 

5. Add additional jumper wires, a resistor, and a capacitor, as shown in the circuit.   
6. We’ll use the PowerLab as our voltmeter, to record voltage in our circuit. Plug a **BNC to DIN8 adapter** and **double banana adapter** into Input 1 of the PowerLab.  
7. Connect the ground/reference (**black**, \-) side of the double banana adapter to the circuit ground with alligator clips.

   **NOTE:** The “ground” in this circuit is really going to be our reference electrode. It should be connected to the black side of Input 1\.

8. Connect the “hot” pin (**red,** \+) of the double banana adaptor to the “record here” point on the circuit diagram.

9. Open LabChart with the **Circuit Lab** settings ([http://bit.ly/labchart](http://bit.ly/labchart))  
10. Set up the Stimulator to stimulate with 1 V for **1 second**. Make sure the range of your recording channel is 1 V.  Switch the stimulator to “on”.   
11. Open Scope View and press **\>Start**. You should see a waveform on your screen.   
    **NOTE:** You may need to Autoscale the channel (right click) to be able to see the entire trace.

**The time constant should equal 𝛕 = RC. What *should* the time constant be (in seconds), given the resistors and capacitors in the circuit?** Mind your units. **Answer Q8 on the quiz.**

𝛕 = \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

We can also measure the time constant by measuring how long it takes the curve to rise or decay. One time constant (𝛕) is defined by when the circuit rises to **63.2%** of its total charge (alternately, we could see how long it takes to decay 1/e, about 37%). 

To empirically measure your time constant, follow these steps. 

1. Make sure your voltage is very close to zero at baseline.  
2. Find the maximum voltage (Vmax) that your circuit reaches. 		  
3. Calculate 0.632 \* Vmax  							  
4. Using the marker tool (right click anywhere in the window and choose “Clamp to trace”) find the point in your trace that is equal to the value calculated in Step 3\.   
5. Move your cursor to the start of the stimulus. In the upper right corner of the window, you’ll see something that says Δt. This is the change in time since the mark on the curve and your time constant. 

**What is your recorded time constant with 1 V stimulation, a 100 kΩ resistor, and a 1 uF capacitor?** 

𝛕 = \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**How close is the recorded time constant to the value you calculated with 𝛕 = RC?**

In engineering, 5𝛕 is consisted the time it takes for a capacitor to fully charge (technically, its at 99% of full charge). The time constant is symmetrical for charging as well as losing charge. **How long would it take this patch of membrane to return to baseline, then? What does that mean for *computation* happening in this membrane?** 

### Record and plot your time constant with different resistors

Next, we’ll see how the time constant of the circuit changes in response to the resistance strength. Use the following resistors in your circuit, and use the steps above to determine the time constant for each. 

| Resistance | Time Constant |
| :---- | :---- |
| 3 kΩ |  |
| 15 kΩ |  |
| 33 kΩ |  |
| 100  kΩ |  |
| 220 kΩ |  |
| 330 kΩ |  |

**Plot the time constant against the resistance.  Answer Q9a and Q9b on the quiz.**

The plot should have: 

* A line fit to it, with a description of what the trendline is (you can either show the equation or say in the figure caption what kind of trendline is plotted with the R2 value.   
* Labeled axes & units  
* At least six data points

Plotting Tips:

* Python: Use the [Plot Scatter](https://bipn145.github.io/Python/PlotScatter.html) notebook  
* Excel:   
  * Insert your plot as a scatter plot (this will tell Excel to treat your x-axis values (resistance) as actual values, not categories.  
  * Add a trendline by right clicking on the data, and choosing “Add Trendline”. You should add a trendline for the trend you’re expecting (we talked about this in lecture).   
  * Make sure that none of the markers for your points are cut off. If they are, change your axes so that they fit. 

### Check your time constant against the literature

Let’s circle back to biology. Are the time constants you measured similar to what you’d find in a real neuron? Check this website to look at a collection of examples from the literature: [https://neuroelectro.org/ephys\_prop/index.html](https://neuroelectro.org/ephys_prop/index.html) 

Choose a paper from the example above and look for the reported time constant. Is the time constant in your circuit similar? If not, why might it be different?

---

### Troubleshooting

| Observation | Likely Issue | Possible Solution |
|---|---|---|
| There isn’t any voltage in your circuit | The power terminals are not connected properly Your stimulator is not on  | Make sure everything is connected correctly on your breadboard. Consult [https://wiring.org.co/learning/tutorials/breadboard/index.html](https://wiring.org.co/learning/tutorials/breadboard/index.html)  Check that the stimulator panel is switched on, and that you pressed Start |
| Your signal is really noisy | You’re not grounded. Your pulse is not being properly sent. | Double check your circuit is connected correctly |
| You don’t see a fin-shaped waveform | Your Scope/Chart View is not scaled properly.  Your capacitor is not properly connected or broken. | Try autoscaling Check the capacitor placement or replace it. |
| You’ve got “rabbit ears” on your waveform | Your voltage is reversed somewhere | Check the power terminals are connected in the right direction |

[image1]: <data:image/png;base64,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>

[image2]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAA4klEQVR4Xu2RsQ2EMAxF2SS0tJQI6GAImIOaMENSwhKUMFxORnL0EyMB4rq74kk4334KcaKUct8kiQ/e8hcq17at2/c9oOs6n8/zLHKcvxSijImlmF0Kq6oKcmIcx2fCbdsO0ZkUZXxTnD8V8jdKqW6axtdpmh5nJMV5IeRGhqRZlvma3jTuQYTwLUKY53lQa61d3/e+XpbF1XUd9CBCSG/Iv4gLoLooCrEoWiDOnwppYJomsQACF0WyW1vmgXVdgwzhnkdCgt4s7uGb3RKWZemstQHDMPjcGCNynBfCt/yg8APkN+HF3bFkQgAAAABJRU5ErkJggg==>