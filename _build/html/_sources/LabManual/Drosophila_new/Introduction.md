# *Drosophila* Behavior & Optogenetics

## A bittersweet mystery

You’ve made a *bitter* mistake. You mixed up two unlabeled tubes of optogenetic flies. Both fly lines express CsChrimson, a red-light activated channelrhodopsin, but the neurons in which the CsChrimson is expressed differ.
One tube contains a Gr5a-Gal4 × UAS-CsChrimson cross, in which CsChrimson is expressed in neurons that detect sweet compounds (including sucrose). These are the "sweet" optogenetic flies, because illuminating them with red light activates the neural circuitry involved in sweet taste perception. The other tube contains a Gr66a-Gal4 × UAS-CsChrimson cross, in which CsChrimson is expressed in bitter-sensing neurons. These are the "bitter" optogenetic flies, because illuminating them with red light activates the neural circuitry involved in the perception of bitter, noxious tastants. 

**Your goal is to design and implement experiments that will allow you to determine whether your mystery flies express CsChrimson in sweet-sensing neurons or bitter-sensing neurons.**


## *Drosophila* as a model in neuroscience

With about 140,000 neurons aand incredible genetic tractability, the fruit fly is an important model organism in neuroscience. About 65% of human disease-associated genes have a homolog in *Drosophila melanogaster* (Ugur et al., 2016). Like many model organisms, fruit flies are easy to reproduce, cheap, and easy to take care of in a lab. On top of that, they've been studied for more than a century. *Drosophila* have been used to study learning, memory, vision, sleep, addiction, courtship, and aggression, among many other behaviors.

As summarized in [Akil et al. (2026)](https://www.jove.com/t/67964/behavioral-assays-for-optogenetic-manipulation-neural-circuits), *Drosophila* are particularly amenable to experiments with optogenetic manipulations:
> Its small size and semi-transparent cuticle enhance the penetration of light, especially long-wavelength red light, enabling efficient optogenetic manipulation. While Drosophila cells cannot produce sufficient retinal, a crucial cofactor for the functionality of channelrhodopsins, adding retinal to their diet compensates for this limitation, ensuring effective activation of optogenetic tools.

In this lab, we'll try to replicate two of the protocols from this paper.

## Can we replicate a published protocol?
Science relies on communicating information between labs and the ability to replicate protocols from prior research. Today, we'll see if we can replicate two protocols from one paper, Huda et al. (2026) "[Behavioral Assays for Optogenetic Manipulation of Neural Circuits in Drosophila melanogaster](https://www.jove.com/t/67964/behavioral-assays-for-optogenetic-manipulation-neural-circuits)" published in the *Journal of Visual Experiments*.

### Why Gr5a and Gr66a?

**Gr5a** and **Gr66a** are gustatory receptor genes expressed in two largely non-overlapping populations of taste neurons. Gr5a neurons detect sugars and drive **appetitive** behavior; Gr66a neurons detect bitter compounds and drive **avoidance**. In each fly line here, one of these promoters drives expression of **CsChrimson**, a red-light-activated channelrhodopsin. Red light is used specifically because flies cannot normally detect it — so any behavioral response you see is caused by CsChrimson activation, not by the fly's own visual system responding to the light itself.

Because Gr5a and Gr66a neurons drive opposite behaviors, this assay lets you causally link the *identity* of an activated neuron population to a specific behavior — one of the central logics of optogenetics.

### In this lab you will:

- Quantify the behavior of fruit flies on different behavioral assays
- Identify different types of transgenic flies used for neuroscience research
- Implement an optogenetic experiment to interrogate neural circuit function

:::{admonition} Comprehension Check
:class: tip
1. How does the Gal4-UAS system result in CsChrimson expression in different neurons?
2. CsChrimson is a red-light shifted channelrhodopsin. What happens when you shine a red light on a Gr5a-Gal4 x UAS-CsChrimson cross?
:::

## Common protocols

We've done the first few steps for both of these assays for you, detailed below.

### Fly Crossing & Preparation

1. Cross the Gr66a-Gal driver line to UAS-CsChrimson, resulting in the experimental genotype Gr66a>CsChrimson. Gr66a>CsChrimson flies express CsChrimson in bitter taste neurons.
2. Cross the Gr5a-Gal driver line to UAS-CsChrimson, resulting in the experimental genotype Gr66a>CsChrimson. Gr5a>CsChrimson flies express CsChrimson in sweet taste neurons.
3. Both types of flies should be kept in the dark before and during the experiments.
4. About 5 days before experiments, flies are moved to an all trans retinal (ATR) food, which is supplemented with all-*trans*-retinal, the light-sensitive cofactor CsChrimson requires to activate — fly cells don't make enough of it on their own.
5. Flies are kept in the dark in ATR food until the assay to avoid any premature CsChrimson activation by ambient light.

:::{admonition} Starvation!
:class: note
Although previous studies recommend starving the Gr5a flies because sugar-seeking behavior is strongest when flies are food-deprived, we aren't able to do that for our lab.
:::

:::{admonition} Concept Check
:class: tip
Why is **red** light used for CsChrimson activation in these assays, rather than blue or green light?
:::


## Relevant references

Chen, Y.-C. D., & Dahanukar, A. (2020). Recent advances in the genetic basis of taste detection in *Drosophila*. *Cellular and Molecular Life Sciences* 77(6): 1087–1101.

Nakamura, M., Baldwin, D., Hannaford, S., Palka, J., & Montell, C. (2002). Defective proboscis extension response (DPR), a member of the Ig superfamily required for the gustatory response to salt. *Journal of Neuroscience* 22(9): 3463–3472.

Trisal, S., VijayRaghavan, K., & Ramaswami, M. (2023). The proboscis extension reflex assay for evaluating taste responses in *Drosophila*. *Bio-protocol* 13(20).

Ugur, B., Chen, K., & Bellen, H. J. (2016). *Drosophila* tools and assays for the study of human diseases. *Disease Models & Mechanisms* 9(3): 235–244.
