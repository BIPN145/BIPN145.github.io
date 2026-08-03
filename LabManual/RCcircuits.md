# RC Circuits

Let’s build a circuit that models the passive membrane simulations you performed in the last part of our **Modeling Neural Membranes** lab. 


| **Parts** | **Cables & Adapters** |
|---|---|
| PowerLab & Computer | DIN8 to BNC adapter (1) |
| 1.5 V (x2) battery & holder (2) | BNC to double banana adapter (2) |
| Resistors: 3 kΩ, 15 kΩ, 33 kΩ, 100 kΩ (3), 220 kΩ, 470 kΩ | Banana plug cable (4) |
| 1 µF capacitor | Alligator clips (4) |
| 1-100 kΩ potentiometer | |

## Getting familiar with your breadboard

Breadboards are really useful ways to prototype and model electrical circuits (and in our case, neural circuits). Some holes on the breadboard are connected together, so putting wires into connected holes provides an electrical contact between them. These connections are organized with two main rails (rows) on the sides, typically used for power, and many columns. Knowing how these components are connected is crucial to understanding [how to use a breadboard](https://www.sciencebuddies.org/science-fair-projects/references/how-to-use-a-breadboard).

## Building an RC Circuit

Build the circuit below. We’ll use the OUTPUT of your Powerlab to send a pulse of current through the circuit. 

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

:::{admonition} Autoscale!
:class: tip
You may need to Autoscale the channel (right click) to be able to see the entire trace.
:::

:::{admonition} Q8.
:class: attention
The time constant should equal 𝛕 = RC. What *should* the time constant be (in seconds), given the resistors and capacitors in the circuit?** Mind your units. **Answer Q8 on the quiz.**
:::

### Measure your time constant

We can also measure the time constant by measuring how long it takes the curve to rise or decay. One time constant (𝛕) is defined by when the circuit rises to **63.2%** of its total charge (alternately, we could see how long it takes to decay 1/e, about 37%). 

To empirically measure your time constant, follow these steps. 

1. Make sure your voltage is very close to zero at baseline.  
2. Find the maximum voltage (Vmax) that your circuit reaches. 		  
3. Calculate 0.632 \* Vmax  							  
4. Using the marker tool (right click anywhere in the window and choose “Clamp to trace”) find the point in your trace that is equal to the value calculated in Step 3\.   
5. Move your cursor to the start of the stimulus. In the upper right corner of the window, you’ll see something that says Δt. This is the change in time since the mark on the curve and your time constant. 

:::{admonition} From theory to observation
:class: tip
What is your recorded time constant (𝛕) with 1 V stimulation, a 100 kΩ resistor, and a 1 uF capacitor? How close is the recorded time constant to the value you calculated with 𝛕 = RC?
:::

In engineering, 5𝛕 is consisted the time it takes for a capacitor to fully charge (technically, its at 99% of full charge). The time constant is symmetrical for charging as well as losing charge. **How long would it take this patch of membrane to return to baseline, then? What does that mean for *computation* happening in this membrane?** 

### Record and plot your time constant with different resistors

Next, we’ll see how the time constant of the circuit changes in response to the resistance strength. Use the following resistors in your circuit, and use the steps above to determine the time constant for each. 

**Table 4. Resistance vs. Time Constant 
| Resistance | Time Constant |
| :---- | :---- |
| 3 kΩ |  |
| 15 kΩ |  |
| 33 kΩ |  |
| 100  kΩ |  |
| 220 kΩ |  |
| 330 kΩ |  |

:::{admonition} Plot your results
:class: attention
**Plot the time constant against the resistance.  Answer Q9a and Q9b on the quiz.** Look for the corresponding tab on the [Modeling Neural Membranes Google Sheet template](https://docs.google.com/spreadsheets/d/1Jg2RWFHUMrMBwb_iIrArJ1SlwGvIHXGjixTGJQ5B9s0/edit?usp=sharing).
::: 


#### Plotting Tips
* **Google Sheets**: Use the template provided above and use `Insert > Chart > Scatter`. 
  * Add a trendline under `Customize > Series > Trendline`.    
  * Make sure that none of the markers for your points are cut off. If they are, change your axes so that they fit. 
  * Enter your values into the table *without* units so that Sheets will recognize them as numerical. You can indicate the correct units in the table and axes labels.
* **Python**: Use the [Plot Scatter](https://bipn145.github.io/Python/PlotScatter.html) notebook!


### Check your time constant against the literature

Let’s circle back to biology. Are the time constants you measured similar to what you’d find in a real neuron? Check this website to look at a collection of examples from the literature: [https://neuroelectro.org/ephys\_prop/index.html](https://neuroelectro.org/ephys_prop/index.html) 

Choose a paper from the example above and look for the reported time constant. Is the time constant in your circuit similar? If not, why might it be different?


## Troubleshooting

| Observation | Likely Issue | Possible Solution |
|---|---|---|
| There isn’t any voltage in your circuit | The power terminals are not connected properly Your stimulator is not on  | Make sure everything is connected correctly on your breadboard. Consult [https://wiring.org.co/learning/tutorials/breadboard/index.html](https://wiring.org.co/learning/tutorials/breadboard/index.html)  Check that the stimulator panel is switched on, and that you pressed Start |
| Your signal is really noisy | You’re not grounded. Your pulse is not being properly sent. | Double check your circuit is connected correctly |
| You don’t see a fin-shaped waveform | Your Scope/Chart View is not scaled properly.  Your capacitor is not properly connected or broken. | Try autoscaling Check the capacitor placement or replace it. |
| You’ve got “rabbit ears” on your waveform | Your voltage is reversed somewhere | Check the power terminals are connected in the right direction |

[image1]: <data:image/png;base64,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>

[image2]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAA4klEQVR4Xu2RsQ2EMAxF2SS0tJQI6GAImIOaMENSwhKUMFxORnL0EyMB4rq74kk4334KcaKUct8kiQ/e8hcq17at2/c9oOs6n8/zLHKcvxSijImlmF0Kq6oKcmIcx2fCbdsO0ZkUZXxTnD8V8jdKqW6axtdpmh5nJMV5IeRGhqRZlvma3jTuQYTwLUKY53lQa61d3/e+XpbF1XUd9CBCSG/Iv4gLoLooCrEoWiDOnwppYJomsQACF0WyW1vmgXVdgwzhnkdCgt4s7uGb3RKWZemstQHDMPjcGCNynBfCt/yg8APkN+HF3bFkQgAAAABJRU5ErkJggg==>