Search.setIndex({"docnames": ["Maxwell_Formulations", "demos/FEMBEM_Capacitor", "demos/Laplace_DtN_direct", "demos/Laplace_DtN_indirect", "demos/Laplace_Mixed", "demos/Laplace_NtD_direct", "demos/Laplace_NtD_indirect", "demos/Maxwell_DtN_direct", "demos/Maxwell_DtN_indirect", "demos/Maxwell_Mixed", "ho_cvg", "intro"], "filenames": ["Maxwell_Formulations.md", "demos/FEMBEM_Capacitor.ipynb", "demos/Laplace_DtN_direct.ipynb", "demos/Laplace_DtN_indirect.ipynb", "demos/Laplace_Mixed.ipynb", "demos/Laplace_NtD_direct.ipynb", "demos/Laplace_NtD_indirect.ipynb", "demos/Maxwell_DtN_direct.ipynb", "demos/Maxwell_DtN_indirect.ipynb", "demos/Maxwell_Mixed.ipynb", "ho_cvg.md", "intro.md"], "titles": ["Boundary Integral Equations for Maxwell", "FEM-BEM Coupling", "Laplace solver using direct formulation (Dirichlet)", "Laplace solver using indirect formulation (Dirichlet)", "Laplace mixed boundary values", "Laplace solver using direct formulation (Neumann)", "Laplace solver using indirect formulation (Neumann)", "Maxwell solver for Pec using direct formulation", "Maxwell solver for PEC bodies (EFIE)", "Maxwell solver with mixed BC", "Convergence Rates for HO BEM", "Welcome to NG-BEM"], "terms": {"begin": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "arrai": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "r": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "rcl": [0, 1, 2, 3, 4, 7, 8, 9, 10], "textnorm": [0, 1, 4, 7, 8, 9, 10], "dirichlet": [0, 1, 4, 5, 7, 8, 9, 10, 11], "quad": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "gamma_r": [0, 7, 8, 9, 10], "boldsymbol": [0, 6, 7, 8, 9, 10], "u": [0, 1, 2, 3, 4, 5, 6, 10], "left": [0, 1, 2, 3, 4, 5, 6, 7, 8], "n": [0, 1, 2, 4, 5, 6, 7, 8, 9, 10], "time": [0, 2, 3, 5, 7, 9], "right": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "1ex": [0, 1], "rotat": [0, 7], "gamma_d": [0, 9], "neumann": [0, 1, 2, 4, 7, 8, 9, 10, 11], "gamma_n": [0, 9, 10], "dfrac": [0, 9, 10], "1": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "kappa": [0, 7, 8, 9, 10], "mathbf": [0, 7, 8, 10], "curl": [0, 6, 7, 8, 9, 10], "omega": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "sqrt": [0, 2, 3, 4, 5, 6, 7, 8, 9], "varepsilon": 0, "mu": 0, "end": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "l": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10], "h": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10], "frac12": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "mathrm": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "_": [0, 2, 3, 5, 6, 7, 8, 9, 10], "gamma": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "tangenti": [0, 7, 8], "edg": [0, 2, 3, 10], "project": [0, 5], "weakli": 0, "continu": 0, "div": [0, 7, 8, 9, 10], "normal": [0, 2, 4, 5, 6, 7, 8, 9], "condinu": 0, "let": [0, 2, 3, 5, 6, 10], "mathbb": [0, 2, 3, 5, 6, 7, 8], "3": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "denot": [0, 10], "perfect": [0, 7, 8, 10], "conductor": [0, 7, 8], "e": [0, 2, 3, 4, 7, 8, 9, 10], "i": [0, 2, 3, 4, 7, 8, 9, 10], "m": [0, 1, 2, 4, 5, 6, 7, 8, 9], "given": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "an": [0, 2, 3, 4, 5, 7, 10], "incom": [0, 7, 8], "harmon": [0, 10], "electromagnet": [0, 7, 10], "signal": [0, 7], "The": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10], "scatter": [0, 7, 8, 10], "compon": 0, "solv": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "follow": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11], "exterior": [0, 1], "domain": [0, 1, 9], "c": [0, 1, 4, 7, 8, 9, 10], "ccl": 0, "from": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "here": [0, 1, 5, 8], "we": [0, 1, 2, 3, 4, 5, 7, 8, 10], "can": [0, 5, 6, 10, 11], "deriv": [0, 3], "two": 0, "second": [0, 1], "order": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "one": [0, 10], "2": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "0": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "subset": [0, 2, 3, 5, 6, 7, 8], "x": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "epsilon": [0, 7, 8, 9], "mathcal": [0, 1, 7, 8, 9], "o": [0, 1, 7, 8, 9], "displaystyl": [0, 1, 2, 3, 4, 5, 6, 7, 8], "frac": [0, 1, 2, 3, 4, 5, 6, 7, 8], "infti": [0, 1, 7, 8, 9, 10], "choos": [0, 2, 3], "look": [0, 1, 2, 4, 5, 8, 9], "first": [0, 1], "represent": [0, 1, 4, 5, 6, 7, 8, 10], "formula": [0, 1, 4, 5, 6, 10], "sl": [0, 2, 3, 5, 7, 8], "dl": [0, 2, 5, 6, 7], "underbrac": [0, 2, 3, 5, 6, 7, 8], "int": [0, 1, 4, 5, 6, 7, 10], "limits_": [0, 1, 4, 5, 6, 7, 10], "4": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "pi": [0, 1, 2, 3, 4, 5, 6, 7, 8], "y": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "j": [0, 3, 7, 8, 9], "d": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "sigma_i": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10], "nabla": [0, 1, 7, 8], "variat": [0, 1, 2, 3, 5, 6, 7, 8], "formul": [0, 1, 8, 11], "discretis": [0, 2, 3, 5, 6, 7, 8, 10], "foral": [0, 1, 2, 3, 5, 6, 7, 8], "v": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "langl": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10], "rangle_": [0, 2, 3, 5, 6, 7, 8], "stackrel": 0, "mom": [0, 7, 8, 9], "longrightarrow": 0, "k": [0, 1, 2, 4, 5, 7, 9], "t": [0, 1, 2, 3, 4, 5, 9], "bie": [0, 7, 8], "often": 0, "call": [0, 8, 10], "efi": [0, 11], "solut": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "total": 0, "densiti": [0, 3, 7, 8], "same": [0, 9], "It": [0, 11], "hold": [0, 1, 4], "cl": 0, "ar": [0, 1, 2, 5, 10], "relat": [0, 1, 4], "condit": [0, 1, 4, 9, 10], "again": [0, 10], "big": 0, "appli": [0, 5, 6, 7], "rightarrow": 0, "interc": [0, 1, 4, 10], "us": [0, 1, 4, 9, 10, 11], "2ex": 0, "mfie": 0, "also": [0, 7, 8, 10], "lead": [0, 2, 3, 5, 6, 7, 8], "type": 0, "consid": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "conform": [0, 1, 4, 5, 9], "finit": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "element": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "test": [0, 1, 3, 7, 8, 10], "trial": [0, 1, 3, 7, 8], "hypersingular": [0, 1, 5, 6, 11], "entri": 0, "lk": 0, "v_l": 0, "varphi_k": 0, "rangl": [0, 1, 2, 4, 5, 6, 10], "sigma_x": [0, 6], "psi_k": 0, "adjoint": [0, 5], "doubl": [0, 1, 2, 5, 7, 11], "layer": [0, 1, 2, 3, 5, 7, 8, 11], "potenti": [0, 1, 2, 3, 7, 8, 10], "nabla_": 0, "name": [0, 1, 2, 3, 4, 9], "symbol": 0, "singl": [0, 1, 2, 3, 7, 8, 11], "mass": [0, 2, 4, 5, 7, 9], "matrix": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11], "maxwellsinglelayerpotentialoper": [0, 7, 8, 9], "maxwelldoublelayerpotentialoper": [0, 7, 9], "maxwellsinglelayerpotentialoperatorcurl": [0, 9], "kei": [1, 2, 3, 4, 5, 6, 7, 8, 9], "transmiss": [1, 9], "problem": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "capacitor": 1, "electrostat": [1, 2, 3, 5, 6, 10], "bvp": [1, 2, 3, 4, 5, 6, 9, 10], "ngsolv": [1, 2, 3, 4, 5, 6, 7, 8, 9, 11], "import": [1, 2, 3, 4, 5, 6, 7, 8, 9], "netgen": [1, 2, 3, 4, 5, 6, 7, 8, 9], "occ": [1, 2, 3, 4, 5, 6, 7, 8, 9], "mesh": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "krylovspac": [1, 2, 3, 4, 5, 6, 7, 8, 9], "cg": [1, 2, 3, 4, 5, 6, 7, 8, 9], "gmre": [1, 4, 7, 9], "webgui": [1, 2, 3, 4, 5, 6, 7, 8, 9], "draw": [1, 2, 3, 4, 5, 6, 7, 8, 9], "libbem": [1, 2, 3, 4, 5, 6, 7, 8, 9], "load": [1, 2, 3, 4, 5, 6, 7, 8, 9], "ngbem": [1, 2, 3, 4, 5, 6, 7, 8, 9, 11], "librari": [1, 2, 3, 4, 5, 6, 7, 8, 9], "plate": 1, "delta": [1, 2, 3, 4, 5, 6, 10], "gamma_0": [1, 2, 3, 4, 9, 10], "u_0": [1, 2, 3, 4, 5, 10], "gamma_1": [1, 4, 5, 6, 9, 10], "radiat": [1, 9, 10], "lim": 1, "largebox": 1, "box": [1, 4, 9], "b1": 1, "5": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "b2": 1, "top": [1, 11], "bot": 1, "face": [1, 4, 8, 9], "topfac": 1, "boundari": [1, 2, 3, 5, 6, 7, 8, 9, 10, 11], "botfac": 1, "maxh": [1, 2, 3, 4, 5, 6, 7, 8, 9], "shell": 1, "air": 1, "outer": 1, "shape": [1, 4, 5, 9], "occgeometri": [1, 2, 3, 4, 5, 6, 7, 8, 9], "generatemesh": [1, 2, 3, 4, 5, 6, 7, 8, 9], "clip": 1, "In": [1, 3, 7, 8, 10], "uniqu": [1, 5, 6, 10], "trace": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "calderon": [1, 4, 9], "projector": [1, 2, 3, 4, 5, 6, 7, 8, 9], "cc": [1, 4], "weak": 1, "interior": [1, 4], "valu": [1, 2, 3, 5, 6, 7, 8, 10, 11], "read": [1, 7, 8, 11], "cdot": [1, 5], "sigma": [1, 5], "f": [1, 9], "substitut": 1, "now": [1, 5, 10], "implicitli": 1, "build": [1, 11], "equat": [1, 2, 3, 5, 6, 7, 8, 9, 11], "ad": 1, "known": [1, 7, 8, 10], "symmetr": [1, 2, 3, 5, 6, 7, 8], "To": [1, 10], "understand": 1, "better": 1, "structur": 1, "discret": 1, "system": [1, 2, 3, 5, 6, 7, 8, 9], "dof": [1, 4, 9], "split": 1, "degre": [1, 10], "freedom": [1, 10], "insid": [1, 10], "those": [1, 10], "ccc": 1, "a_": 1, "f_": 1, "note": [1, 3, 6, 7, 9, 10], "without": 1, "obtain": [1, 7, 8, 10], "nedelec": 1, "gener": [1, 8, 9], "space": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "set": [1, 4, 7, 8, 9, 10], "surfac": [1, 4, 5, 7, 11], "fesh1": [1, 2, 4, 5, 6], "h1": [1, 2, 4, 5, 6], "print": [1, 2, 3, 4, 5, 6, 7, 8, 9], "ndof": [1, 2, 4, 5, 6, 7, 8, 10], "tnt": [1, 2, 3, 4, 5, 6, 7, 8, 9], "bilinearform": [1, 2, 3, 4, 5, 6, 7, 8, 9], "grad": [1, 5], "dx": 1, "assembl": [1, 2, 3, 4, 5, 6, 7, 8, 9], "dirtopfac": 1, "gridfunct": [1, 2, 3, 4, 5, 6, 7, 8, 9], "dirbotfac": 1, "definedon": [1, 4, 5, 6, 7, 8, 9], "upper": [1, 9], "lower": [1, 9], "linearform": [1, 3, 5, 6, 8], "vec": [1, 2, 3, 4, 5, 6, 7, 8, 9], "mat": [1, 2, 3, 4, 5, 6, 7, 8, 9], "7373": 1, "verb": 1, "provid": 1, "howev": 1, "still": 1, "need": [1, 5], "fesl2": [1, 2, 3, 4, 5], "surfacel2": [1, 2, 3, 4, 5], "dual_map": [1, 2, 3, 5], "true": [1, 2, 3, 5, 6, 7, 8, 9], "f2": 1, "vector": [1, 3, 4, 8], "l2": [1, 2, 4, 5], "1450": 1, "oper": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "taskmanag": [1, 2, 3, 4, 5, 6, 7, 8, 9], "singlelayerpotentialoper": [1, 2, 3, 4], "intord": [1, 2, 3, 4, 5, 6, 7, 8, 9], "12": [1, 2, 3, 4, 5, 6, 7, 8], "ep": [1, 2, 3, 4, 5, 6, 7, 8, 9], "1e": [1, 2, 3, 4, 5, 6, 7, 8, 9], "10": [1, 2, 3, 4, 5, 6, 7, 8, 11], "method": [1, 2, 3, 5, 6, 7, 8, 9, 10, 11], "aca": [1, 2, 3, 5, 6, 7, 8, 11], "doublelayerpotentialoper": [1, 2, 4, 5], "trial_definedon": 1, "test_definedon": 1, "hypersingularoper": [1, 4, 5, 6], "trialfunct": 1, "testfunct": 1, "ds": [1, 2, 3, 4, 5, 6, 7, 8, 9], "111111000000000000": 1, "setup": 1, "hand": [1, 3, 4, 5, 6, 8, 9], "side": [1, 3, 4, 5, 6, 8, 9], "sym": 1, "blockmatrix": [1, 4, 9], "nonsym": 1, "rh": [1, 2, 3, 4, 5, 6, 7, 8, 9], "blockvector": [1, 4, 9], "l2mass": 1, "astab": 1, "pre": [1, 2, 3, 4, 5, 6, 7, 8, 9], "invers": [1, 2, 3, 4, 5, 6, 7, 8, 9], "freedof": [1, 4, 5, 6, 7, 8, 9], "sparsecholeski": 1, "none": [1, 4, 9], "comput": [1, 2, 3, 4, 7, 8, 9, 10], "version": 1, "sol_sym": 1, "tol": [1, 2, 3, 4, 5, 6, 7, 8, 9], "8": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "maxstep": [1, 2, 3, 4, 5, 6, 7, 8, 9], "400": 1, "printrat": [1, 2, 3, 5, 6, 7, 8, 9], "fals": [1, 2, 3, 4, 5, 6, 7, 8, 9], "gfu": [1, 4], "z": [1, 2, 3, 4, 5, 6, 7, 8, 9], "dist": 1, "function": [1, 3, 5, 9, 10, 11], "turn": 1, "plane": [1, 7, 8, 10], "control": 1, "panel": [1, 2, 3], "non": 1, "sol_nonsym": 1, "A": [1, 4, 7, 9, 10, 11], "b": [1, 4, 7, 9], "min": [1, 8], "max": [1, 8], "refer": [1, 9], "principl": 1, "On": [1, 10], "integr": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "homogen": [2, 3, 4, 5, 6], "data": [2, 3, 4, 5, 6, 7, 8, 9, 10], "precondition": [2, 3, 5, 6, 7, 8, 9], "partial": [2, 3, 5, 6], "ansatz": [2, 3, 8], "int_": [2, 3, 8], "u_1": [2, 4, 5, 6, 10], "defin": [2, 3, 4, 5, 6, 7, 8, 9], "geometri": [2, 3, 5, 6, 7, 8, 9], "creat": [2, 3, 5, 6, 7, 8], "sp": [2, 3, 5, 6, 7, 8], "sphere": [2, 3, 4, 5, 6, 7, 8, 9, 10], "curv": [2, 3, 4, 5, 6, 7, 8, 9, 11], "accord": [2, 3], "uh1": [2, 5, 6], "vh1": [2, 5, 6], "ndofl2": [2, 4, 5], "7220": 2, "22641": 2, "interpol": [2, 4, 5], "exact": [2, 5, 9, 10], "uexa": [2, 4, 5, 6], "u0": [2, 3, 5], "draw_vol": [2, 4, 5, 6, 7, 8, 9], "basewebguiscen": [2, 4], "abov": [2, 3, 6, 7, 8], "linear": [2, 3, 5, 6, 7, 8, 9, 10], "ie": [2, 3, 5, 6, 7, 8], "_1": [2, 5], "_0": [2, 5], "where": [2, 3, 4, 5, 6, 7, 8], "regular": [2, 3, 5, 6, 7, 8], "approxim": [2, 3, 7, 8, 10], "hmatric": 2, "iter": [2, 3, 4, 5, 6], "u1": [2, 4, 5], "diagon": [2, 3], "leafsiz": [2, 3, 5, 6, 7, 8], "40": [2, 3, 4, 5, 6, 7, 8], "eta": [2, 3, 5, 6, 7, 8], "testhmatrix": [2, 3, 5, 6, 7, 8], "bonus_intord": [2, 3, 4, 5, 6, 7, 8, 9], "evalu": [2, 4, 5, 7, 8, 9, 10], "sol": [2, 3, 4, 5, 6, 7, 8, 9], "200": [2, 3, 4, 5, 6], "initi": [2, 3, 5, 6, 7, 8], "2kcg": [2, 3, 5, 6], "residu": [2, 3, 4, 5, 6], "2688253801037296": 2, "06553558458073674": 2, "015544599077948142": 2, "004632058606436214": 2, "004593036294366361": 2, "6": [2, 3, 4, 5, 6, 7, 9, 10], "0008022189950998422": 2, "7": [2, 3, 4, 5, 6, 7, 8, 10], "00019766046284216818": 2, "15892463816215e": 2, "05": [2, 3, 4, 5, 6, 10], "9": [2, 3, 4, 5, 6, 10], "0001030320559235765": 2, "699909626524041e": 2, "11": [2, 3, 4, 5, 6], "1502554443343895e": 2, "8228831474569672e": 2, "13": [2, 3, 4, 5, 6], "5343515082076535e": 2, "14": [2, 3, 4, 5, 6], "7402177351037414e": 2, "15": [2, 3, 4, 5, 6], "589075458534609e": 2, "06": [2, 3, 4, 5, 6, 10], "16": [2, 3, 4, 5, 6], "802384353983555e": 2, "17": [2, 3, 4, 5, 6], "1118866472261058e": 2, "18": [2, 3, 4, 5, 6], "963671995941951e": 2, "19": [2, 3, 4, 5, 6], "6925470414869674e": 2, "20": [2, 3, 4, 5, 6, 8], "66702470235276e": 2, "21": [2, 3, 4, 5, 6], "1838341886573426e": 2, "22": [2, 3, 4, 5, 6], "4625200656887405e": 2, "23": [2, 3, 4, 5, 6], "7967828880434654e": 2, "24": [2, 3, 4, 5, 6], "7350325927730044e": 2, "25": [2, 3, 4, 5], "589123284127319e": 2, "26": [2, 3, 4, 5], "0526815231904489e": 2, "27": [2, 3, 4, 5], "878557830071291e": 2, "07": [2, 3, 4, 5, 6, 10], "28": [2, 3, 4, 5], "2594350522941694e": 2, "29": [2, 3, 4, 5], "804753677237142e": 2, "30": [2, 3, 4, 5], "831943457883365e": 2, "31": [2, 3, 4, 5], "537955230879237e": 2, "32": [2, 3, 4, 5], "497449268176541e": 2, "33": [2, 3, 4, 5], "95000222228805e": 2, "34": [2, 3, 4, 5], "095693642993343e": 2, "35": [2, 3, 4, 5], "858478903961728e": 2, "36": [2, 3, 4, 5], "4045168299810223e": 2, "37": [2, 3, 4, 5], "1182182403058054e": 2, "38": [2, 3, 4, 5], "517831213831011e": 2, "08": [2, 3, 4, 5, 6, 10], "39": [2, 3, 4, 5], "929492891920444e": 2, "762790390359661e": 2, "41": [2, 3, 4, 5], "3668453774058395e": 2, "42": [2, 3, 4, 5], "1798784297157776e": 2, "43": [2, 3, 4], "574529250963146e": 2, "44": [2, 3, 4], "2837643129845963e": 2, "45": [2, 3, 4], "621838882517188e": 2, "46": [2, 3, 4], "893687540235177e": 2, "47": [2, 3, 4], "1352335237316694e": 2, "48": [2, 3, 4], "040593074767152e": 2, "49": [2, 3, 4], "194248692424211e": 2, "09": [2, 3, 4, 5], "50": [2, 3, 4, 10], "885071352902476e": 2, "51": [2, 3, 4], "2971281649348865e": 2, "52": [2, 3, 4], "514226106326673e": 2, "53": [2, 3, 4], "345431815835099e": 2, "54": [2, 3, 4], "1571079296941915e": 2, "55": [2, 3, 4], "3915831149934337e": 2, "56": [2, 3, 4], "1965363423052695e": 2, "57": [2, 3, 4], "364657159649791e": 2, "timer": [2, 3], "hmatrix": [2, 3], "multadd": [2, 3], "3538058838800736": 2, "count": [2, 3], "58": [2, 3, 4], "flop": [2, 3], "gflop": [2, 3], "s": [2, 3, 5, 6, 9, 10], "disjoint": [2, 3], "laplacedl": 2, "12617002633463": 2, "38897": 2, "common": [2, 3, 10], "428677623375286": 2, "1592": 2, "vertex": [2, 3], "603784699149855": 2, "4794": 2, "ident": [2, 3], "598112534351337": 2, "533": 2, "farfieldblock": [2, 3], "matvec2": [2, 3], "17181667322479216": 2, "4615": 2, "73607065": 2, "42840466887458584": 2, "matvec1": [2, 3], "063394616502485": 2, "143971849": 2, "271042194795144": 2, "norm": [2, 3, 8, 9], "39298400624405583": 2, "kernel": [2, 3, 5, 9], "7901241040355118": 2, "9230": 2, "38862145": 2, "049184861974864345": 2, "750626997102634": 2, "382": 2, "loop": [2, 3], "112": [2, 4], "2799173875817": 2, "804": 2, "243423060776662": 2, "494": 2, "all": [2, 3, 4, 10], "119": [2, 4], "2479335451965": 2, "laplacesl": [2, 3], "1320554461924254": 2, "7960": 2, "60723201": 2, "45983109936652533": 2, "027091304741423405": 2, "60632551": 2, "2380816124847263": 2, "2473252484690905": 2, "3803503632251338": 2, "15920": 2, "25839954": 2, "06793724023527495": 2, "9927976793333007": 2, "793": 2, "64535421986481": 2, "877": 2, "062457333895154": 2, "9396": 2, "924644570033442": 2, "467": 2, "96600206818119": 2, "1469": 2, "8488542258607916": 2, "135": [2, 4], "889819128635487": 2, "728": 2, "35680725366288": 2, "baseclass": [2, 3], "calchmatrix": [2, 3], "988357938299124": 2, "have": [2, 4, 5, 9], "error": [2, 3, 4, 5, 9, 10], "numer": [2, 3, 5, 7, 8, 9, 10, 11], "graduexa": [2, 5, 6], "cf": [2, 4, 5, 6, 7, 8, 9], "diff": [2, 4, 5, 6, 9], "specialcf": [2, 4, 5, 6, 7, 8, 9], "u1exa": [2, 6], "bnd": [2, 4, 5, 9], "0021893572396393434": 2, "demo": [3, 11], "dens": 3, "pajetrac": [3, 5], "1000": [3, 5], "1856284446361722": 3, "5511126197504219": 3, "13113125439034773": 3, "031075382341886598": 3, "007368321718552593": 3, "0017873102488002246": 3, "0005185169856628255": 3, "0002560526565371585": 3, "0003206576807033507": 3, "00011035833531823466": 3, "0001674770829883903": 3, "0896513121476776e": 3, "274473300635716e": 3, "632572463283343e": 3, "0240009168202185e": 3, "235240211917132e": 3, "881910820038137e": 3, "841512597141705e": 3, "0817964457634693e": 3, "864433067165785e": 3, "8320946929674603e": 3, "810535521215225e": 3, "4120630469529938e": 3, "77002199113252e": 3, "962696505682998e": 3, "572788414147209e": 3, "357077550694016e": 3, "779905987387955e": 3, "7317505071728763e": 3, "725920301877434e": 3, "969876086897504e": 3, "935418732541848e": 3, "851366708217703e": 3, "8360881195691114e": 3, "621976036918233e": 3, "compt": 3, "3080": 3, "compress": [3, 11], "rate": [3, 8, 11], "349931": 3, "000589323": 3, "00010372613361416254": 3, "00011332304421634448": 3, "8475130100534105e": 3, "752744413900531e": 3, "5063257844046756e": 3, "201161649282029e": 3, "091074210729724e": 3, "5722470650406946e": 3, "1398173533714403e": 3, "601114682987693e": 3, "7985157935834744e": 3, "2495673291056765e": 3, "840010014190462e": 3, "1039996619119485e": 3, "6016873278899223e": 3, "390525782088221e": 3, "377216742960555e": 3, "2484134581618446e": 3, "0020809167544435e": 3, "467954530079095e": 3, "3450297598977127e": 3, "233413652711596e": 3, "316529768772103e": 3, "822107798886752e": 3, "225471204391166e": 3, "9054567751438192e": 3, "4560641325559065e": 3, "899852454813338e": 3, "1739925181351957e": 3, "2534619390055752e": 3, "403493245788256e": 3, "333220932454454e": 3, "015799643685005e": 3, "9761572078100446e": 3, "032320271101176e": 3, "7374278722324998e": 3, "737182905755099e": 3, "4520557190232194e": 3, "3309567923488516e": 3, "486019266672398e": 3, "427829801110218e": 3, "2848416741338577e": 3, "761031330423225e": 3, "679452910898918e": 3, "190122036559631e": 3, "9962400043626533e": 3, "3159894368478814e": 3, "2723913823070666e": 3, "312590538032909e": 3, "1204428392127928e": 3, "4133887218374485e": 3, "997633944422024e": 3, "4531603485629705e": 3, "527009997484055e": 3, "615277828888713e": 3, "6179145984743047e": 3, "588667294015795e": 3, "784630954652936e": 3, "59": [3, 4], "723015565024802e": 3, "60": [3, 4], "590722046322888e": 3, "61": [3, 4], "938117752372998e": 3, "62": [3, 4], "271285706220372e": 3, "63": [3, 4], "6670339142744413e": 3, "64": [3, 4], "192415044188918e": 3, "65": [3, 4], "36600639174352e": 3, "66": [3, 4], "353862325618007e": 3, "67": [3, 4], "1953629100643763e": 3, "68": [3, 4], "7624855025373323e": 3, "69": [3, 4], "414503450699543e": 3, "70": [3, 4], "719501134026967e": 3, "71": [3, 4], "661870417526893e": 3, "72": [3, 4], "08142964186749e": 3, "73": [3, 4], "518647929051921e": 3, "74": [3, 4], "209313546344474e": 3, "75": [3, 4], "420444020705122e": 3, "76": [3, 4], "9527890842994155e": 3, "77": [3, 4], "7325571305513662e": 3, "78": [3, 4], "850114886249477e": 3, "79": [3, 4], "0103338433322948e": 3, "80": [3, 4], "8670381963343142e": 3, "81": [3, 4], "0746221761820988e": 3, "82": [3, 4], "385642983609332e": 3, "02510996370511808": 3, "2123": 3, "12485592": 3, "497236561017215": 3, "00559765081292412": 3, "12473136": 3, "228280472801454": 3, "04782915262406372": 3, "07387245444163758": 3, "4246": 3, "5039028": 3, "06821254333685432": 3, "18769478386642635": 3, "204": [3, 4], "4301981212551047": 3, "223": [3, 4], "605981293988976": 3, "147": [3, 4], "139544149046872": 3, "94750": 3, "3827823884261825": 3, "1124": 3, "183806652877994": 3, "3304": 3, "675121835609008": 3, "371": 3, "622057012616107": 3, "269": [3, 4], "462699723234323": 3, "06872795152745": 3, "For": [3, 8, 10], "detail": [3, 6, 8], "analysi": 3, "ellipt": [3, 11], "differenti": 3, "see": 3, "instanc": [3, 6], "strongli": 3, "our": [3, 9, 10], "implement": [3, 6, 10, 11], "singular": 3, "pair": 3, "done": 3, "propos": 3, "randelementmethoden": 3, "like": [4, 10], "thi": [4, 10], "topspher": [4, 9], "botspher": [4, 9], "fuse": [4, 9], "dirchlet": 4, "label": 4, "v1": 4, "ndofh1": 4, "2736": [4, 10], "2128": 4, "ud": 4, "gradn_uexa": 4, "un": 4, "w": 4, "insert": 4, "map": 4, "fd": [4, 9], "fn": [4, 9], "miss": 4, "pred": 4, "check_unus": 4, "pren": 4, "lh": [4, 9], "500": [4, 7, 8], "2kgmre": 4, "109": 4, "56977428387343": 4, "578088986467456": 4, "02971529993236": 4, "7263872104400155": 4, "904571084454537": 4, "2252761934918395": 4, "695885280589776": 4, "845742237212549": 4, "934693441298961": 4, "147365296182972": 4, "7984822439562025": 4, "6096599099508464": 4, "4221319492240632": 4, "2833854974484056": 4, "1815881666909398": 4, "0835527239355542": 4, "9660125018594619": 4, "8510309673852604": 4, "7248868740095112": 4, "5415679170954206": 4, "3602651898065477": 4, "24574930210050622": 4, "16671279818692858": 4, "11627420287939133": 4, "08564097546140019": 4, "0758561831109907": 4, "07280030611206426": 4, "07111902237833044": 4, "06974609122355316": 4, "06677310051883685": 4, "05875038157473041": 4, "04548871576559034": 4, "03231955789774897": 4, "023750620126478925": 4, "020036457915274163": 4, "018765556446985618": 4, "01818819127464733": 4, "017664650298430284": 4, "01732086232269319": 4, "01707632550640583": 4, "01656318703744669": 4, "016004452831295424": 4, "015337970331199826": 4, "013876278672407328": 4, "012477739890169466": 4, "011011806260897724": 4, "00925126073303309": 4, "008024978559541034": 4, "007398338859470811": 4, "00709056706095909": 4, "006951365559012586": 4, "006886446539741309": 4, "006835147742570182": 4, "0067461082459643286": 4, "006528485457066561": 4, "006065521233534668": 4, "005512292482027019": 4, "0051718733154409785": 4, "0049687421511334495": 4, "004768523235849397": 4, "004482629863739388": 4, "004153366193813053": 4, "0039036545920718836": 4, "00373164607519697": 4, "0035920096499237864": 4, "003433144943178115": 4, "0032991632011996753": 4, "003203710531547274": 4, "003132116792552964": 4, "003056409131120033": 4, "002968547780125638": 4, "002913940232309002": 4, "002882554120250164": 4, "00283902399392659": 4, "002773799962717094": 4, "002724327798536615": 4, "002674270630770131": 4, "0025934001721240234": 4, "002502067561479456": 4, "002419853792526647": 4, "0023256128688907774": 4, "0021279539514550113": 4, "83": 4, "0018496195277642106": 4, "84": 4, "00164904433874347": 4, "85": 4, "0014651241182137545": 4, "86": 4, "0013769601603737971": 4, "87": 4, "0013527776251833132": 4, "88": [4, 10], "0013342752661683944": 4, "89": 4, "001320713512216962": 4, "90": 4, "001310138799080009": 4, "91": 4, "0012964795481426358": 4, "92": 4, "0012800685821756999": 4, "93": 4, "0012555716118835116": 4, "94": 4, "0012050893547945944": 4, "95": 4, "001129063177477714": 4, "96": [4, 10], "001013674388941282": 4, "97": 4, "0008735506743615239": 4, "98": 4, "0007328742896250309": 4, "99": 4, "0006221024427603799": 4, "100": 4, "00057304127249464": 4, "101": 4, "0005531219034365028": 4, "102": 4, "0005448435654116934": 4, "103": 4, "0005413806361590752": 4, "104": 4, "0005384367090834324": 4, "105": 4, "0005335287513642109": 4, "106": 4, "0005207662185522647": 4, "107": 4, "0004931003788896067": 4, "108": 4, "0004312925508196811": 4, "00035859605989118395": 4, "110": 4, "0003124861255359668": 4, "111": 4, "00029677393117933136": 4, "0002905735382176985": 4, "113": 4, "00028677160524709746": 4, "114": 4, "000281258424847006": 4, "115": 4, "0002699616697054488": 4, "116": 4, "0002554968801013063": 4, "117": 4, "00024122834699909213": 4, "118": 4, "00023166813931738207": 4, "0002257610019030631": 4, "120": 4, "00022107896617206094": 4, "121": 4, "00021803817056023986": 4, "122": 4, "00021636170364115287": 4, "123": 4, "00021517045893728503": 4, "124": 4, "00021287723413407683": 4, "125": 4, "0002071670865210616": 4, "126": 4, "00019270421406906112": 4, "127": [4, 6], "00017473174289475373": 4, "128": 4, "00015861044030472958": 4, "129": 4, "00015080016323220017": 4, "130": 4, "0001462218453872712": 4, "131": 4, "00014338115451992622": 4, "132": 4, "00014178309224767747": 4, "133": 4, "00013940001917242865": 4, "134": 4, "00013321179606264177": 4, "00012059801866744118": 4, "136": 4, "00010686892638408754": 4, "137": 4, "00010017975479853343": 4, "138": 4, "730692558440012e": 4, "139": 4, "507084509285511e": 4, "140": 4, "360492974615095e": 4, "141": 4, "267813122211062e": 4, "142": 4, "205029970256798e": 4, "143": 4, "148690261953726e": 4, "144": 4, "083882540847361e": 4, "145": 4, "992648426783839e": 4, "146": 4, "77275165131721e": 4, "194963463980959e": 4, "148": 4, "259970096266416e": 4, "149": 4, "380993287204227e": 4, "150": 4, "6212194916275296e": 4, "151": 4, "1297401074797614e": 4, "152": 4, "910219476177334e": 4, "153": 4, "845710202115158e": 4, "154": 4, "823089732998881e": 4, "155": 4, "805289160581213e": 4, "156": 4, "7824873526917997e": 4, "157": 4, "735477623671503e": 4, "158": 4, "611097727366553e": 4, "159": 4, "300893531163364e": 4, "160": 4, "0562658923454674e": 4, "161": 4, "962909895924205e": 4, "162": 4, "9165646783051706e": 4, "163": 4, "888716090733904e": 4, "164": 4, "856838712954146e": 4, "165": 4, "749562493306458e": 4, "166": 4, "450460875622774e": 4, "167": 4, "1483739020182964e": 4, "168": 4, "977485011115027e": 4, "169": 4, "8781280544594152e": 4, "170": 4, "841118392169541e": 4, "171": 4, "809561594134719e": 4, "172": [4, 10], "790574817114556e": 4, "173": [4, 6], "7817196373760218e": 4, "174": 4, "7724767859045117e": 4, "175": 4, "7522790432006366e": 4, "176": 4, "690507430624193e": 4, "177": 4, "5395473029836956e": 4, "178": 4, "3820225726383374e": 4, "179": 4, "3151593387874277e": 4, "180": 4, "2886477447236217e": 4, "181": 4, "2766872794685194e": 4, "182": 4, "2628020710578327e": 4, "183": 4, "2392803008878936e": 4, "184": 4, "194027901400437e": 4, "185": 4, "0867344793669864e": 4, "186": 4, "8593058046349692e": 4, "187": 4, "5431318245309762e": 4, "188": [4, 10], "3608477365707445e": 4, "189": [4, 9], "3030763926547275e": 4, "190": 4, "2892132798946974e": 4, "191": 4, "2833211134322818e": 4, "192": [4, 9], "2768960092100174e": 4, "193": 4, "2660414808311673e": 4, "194": [4, 10], "244308687653562e": 4, "195": 4, "2020533987830851e": 4, "196": 4, "1273119252995644e": 4, "197": 4, "0287353963177704e": 4, "198": 4, "48768008962981e": 4, "199": 4, "121838307200509e": 4, "963639095769533e": 4, "201": 4, "876033846632993e": 4, "202": 4, "81269913488846e": 4, "203": 4, "712832627813084e": 4, "396911224890718e": 4, "205": 4, "213177838100287e": 4, "206": 4, "5862934465884875e": 4, "207": 4, "749618915342769e": 4, "208": 4, "398703197417364e": 4, "209": 4, "301314556803851e": 4, "210": 4, "258754613133445e": 4, "211": 4, "238099623095168e": 4, "212": 4, "226490936566946e": 4, "213": 4, "203000645552451e": 4, "214": 4, "12313990857982e": 4, "215": 4, "952928327603729e": 4, "216": 4, "636817402007184e": 4, "217": 4, "2137155667482297e": 4, "218": 4, "825810347939307e": 4, "219": 4, "5961710691969028e": 4, "220": 4, "5006113612396026e": 4, "221": 4, "4487086839501255e": 4, "222": 4, "42485872410723e": 4, "404700243207949e": 4, "224": 4, "361413238520266e": 4, "225": 4, "2085520954291453e": 4, "226": 4, "9261843019901497e": 4, "227": 4, "7505255439150946e": 4, "228": 4, "6863026989666392e": 4, "229": 4, "6595696301780483e": 4, "230": [4, 10], "6488654182748682e": 4, "231": 4, "642480214397099e": 4, "232": 4, "6342475245706617e": 4, "233": 4, "6189638817212505e": 4, "234": 4, "5907892695972014e": 4, "235": 4, "50570722326555e": 4, "236": 4, "321737940582364e": 4, "237": 4, "2154174107189966e": 4, "238": 4, "1885513196108266e": 4, "239": 4, "1790368383613325e": 4, "240": 4, "1725314245873247e": 4, "241": 4, "1618976498956049e": 4, "242": 4, "1259289083842638e": 4, "243": 4, "0071739829132192e": 4, "244": 4, "851221473432089e": 4, "245": 4, "044450385452296e": 4, "246": 4, "454426644853448e": 4, "247": 4, "291711541165116e": 4, "248": 4, "249716113210452e": 4, "249": 4, "2263963508252e": 4, "250": 4, "201730344167685e": 4, "251": 4, "116041196993898e": 4, "252": 4, "751986887123247e": 4, "253": 4, "103247393605541e": 4, "254": 4, "64740838126283e": 4, "255": 4, "513634891186011e": 4, "256": 4, "465598495011697e": 4, "257": 4, "432479363238409e": 4, "258": 4, "40517226165194e": 4, "259": [4, 6], "369780136024469e": 4, "260": 4, "281700100575385e": 4, "261": 4, "010582431872546e": 4, "262": 4, "39161835906652e": 4, "263": 4, "739983477676239e": 4, "264": 4, "358182324443866e": 4, "265": 4, "192524544414752e": 4, "266": 4, "1313457867431974e": 4, "267": 4, "1097162079984716e": 4, "268": 4, "0924454645012883e": 4, "0521397984019766e": 4, "270": 4, "913232356909367e": 4, "271": 4, "698203696954536e": 4, "272": 4, "5903239922270553e": 4, "273": 4, "5530488655287477e": 4, "274": 4, "538321027827013e": 4, "275": 4, "5285643022733265e": 4, "276": 4, "5107350672819025e": 4, "277": 4, "45729976531329e": 4, "278": 4, "26070537524473e": 4, "279": 4, "863259496771153e": 4, "280": 4, "6189432390388383e": 4, "281": 4, "54042473033192e": 4, "282": [4, 10], "5130987762260686e": 4, "283": 4, "4981113279408446e": 4, "284": 4, "4873696971754102e": 4, "285": 4, "4671880088356592e": 4, "286": 4, "4008973674925218e": 4, "287": 4, "27702493702094e": 4, "288": [4, 10], "0702141400568658e": 4, "289": 4, "175872738783187e": 4, "290": 4, "647687877271999e": 4, "291": 4, "493890810817643e": 4, "292": 4, "463404925805552e": 4, "293": 4, "44032644576603e": 4, "294": 4, "368825549356162e": 4, "295": 4, "134248245932006e": 4, "296": 4, "499681896402192e": 4, "297": 4, "571969807542046e": 4, "298": 4, "961345334184864e": 4, "299": 4, "739359730886974e": 4, "300": [4, 8], "677529668027571e": 4, "301": 4, "6373895404074145e": 4, "302": 4, "589758037690308e": 4, "303": 4, "481047304579451e": 4, "304": 4, "0623741985508214e": 4, "305": 4, "0700325365337355e": 4, "306": 4, "486679695681286e": 4, "307": 4, "329060903310628e": 4, "308": 4, "291509287866332e": 4, "309": 4, "273642803780152e": 4, "310": 4, "258679443456137e": 4, "311": 4, "228919307518225e": 4, "312": 4, "154634444249595e": 4, "313": 4, "984244021170185e": 4, "314": 4, "6288360580884104e": 4, "315": 4, "3372534917595815e": 4, "316": 4, "248993123815727e": 4, "317": 4, "2265598407014498e": 4, "318": 4, "2161941491037488e": 4, "319": 4, "2098288495216932e": 4, "320": 4, "1980859778677595e": 4, "321": 4, "1434256977448923e": 4, "322": 4, "9612451532793384e": 4, "323": 4, "5901327207379285e": 4, "324": 4, "3451447960219688e": 4, "325": 4, "2935341449011167e": 4, "326": 4, "2831404731980754e": 4, "327": 4, "2785627749787023e": 4, "328": 4, "2713858638499269e": 4, "329": 4, "2341982790999762e": 4, "330": 4, "0867695326295311e": 4, "331": 4, "512413411196047e": 4, "gradient": [4, 5], "0006228098891096159": 4, "200427517814712e": 4, "rlc": [5, 6], "written": [5, 6], "form": [5, 6], "forumula": [5, 6], "carefulli": [5, 6, 7], "result": [5, 6, 8, 9, 10], "respect": [5, 10], "todo": 5, "check": [5, 9, 10], "option": 5, "4332": 5, "1600": 5, "stabilis": [5, 6, 8], "cope": 5, "s_": 5, "ij": 5, "v_i": 5, "v_j": 5, "being": 5, "vh1m1": [5, 6], "basematrix": [5, 6], "reshap": [5, 6], "kt": 5, "6734119976551735": 5, "3570708359436435": 5, "20888851335800046": 5, "1706301171838047": 5, "1292250234421183": 5, "10837761567750001": 5, "06658980509446069": 5, "05390070177634602": 5, "03616839125884154": 5, "023747331088605498": 5, "017135975646323597": 5, "010529013246749049": 5, "006843245189196467": 5, "004377148034700796": 5, "002792183423350529": 5, "0017274928252797245": 5, "001004732706787392": 5, "0005839403720913693": 5, "00034101898173912544": 5, "00019007063675770494": 5, "00010675896994169914": 5, "8059772565655696e": 5, "149811493549551e": 5, "7107557048998617e": 5, "037396099049056e": 5, "626967507663484e": 5, "4760648866817508e": 5, "33189265203938e": 5, "230311535063995e": 5, "745210316117556e": 5, "082765813255227e": 5, "260965308677649e": 5, "508925208061692e": 5, "9975673881111267e": 5, "4416911434107242e": 5, "545008867426668e": 5, "0354147814096156e": 5, "5207593599889786e": 5, "546096972222183e": 5, "580269058852484e": 5, "208573615402671e": 5, "6662151786155515e": 5, "compar": [5, 9], "them": [5, 11], "quantit": 5, "u0exa": 5, "004797701047764322": 5, "0916223099897648": 6, "5870733996299382": 6, "35509458993776527": 6, "20439552637076824": 6, "10974300697070706": 6, "05522792544595984": 6, "025779925625166934": 6, "01249642797823975": 6, "008069904459550295": 6, "0029851625858649334": 6, "0010472414030450602": 6, "0003275190006576015": 6, "626799554097373e": 6, "9643810613358547e": 6, "9768861436102513e": 6, "178046730000429e": 6, "752611230527317e": 6, "864452917631025e": 6, "974886049253747e": 6, "1820019284473308e": 6, "213478334825916e": 6, "967268044732498e": 6, "9860987977673407e": 6, "0113232350425156e": 6, "sigma_": 6, "numerisch": 6, "n\u00e4herungsverfahren": 6, "f\u00fcr": 6, "elliptisch": 6, "randwertproblem": 6, "p": [6, 10], "1st": 6, "edit": 6, "current": [7, 11], "induc": [7, 8], "electr": [7, 8, 10], "field": [7, 8, 10], "which": [7, 8], "propag": [7, 8], "possibl": [7, 8], "unknown": 7, "enin": [7, 8], "commun": [7, 8], "scheme": [7, 8], "moment": [7, 8], "perfstepsend": [7, 8, 9], "meshingstep": [7, 8, 9], "meshsurfac": [7, 8, 9], "next": [7, 8], "feshcurl": [7, 8, 9], "hcurl": [7, 8, 9], "complex": [7, 8, 9], "feshdiv": [7, 8, 9], "hdivsurfac": [7, 8, 9], "uhcurl": [7, 8, 9], "vhcurl": [7, 8, 9], "curl_gamma": [7, 8], "nxe": [7, 8, 9], "xn": [7, 8, 9], "uhdiv": [7, 8, 9], "vhdiv": [7, 8, 9], "div_gamma": [7, 8], "nx": [7, 8, 9], "hdiv": [7, 8, 9], "1568": [7, 8], "wave": [7, 8, 10], "e_": [7, 8, 10], "inc": [7, 8, 10], "eps0": [7, 8], "854e": [7, 8], "mu0": [7, 8], "5e9": [7, 8], "e_inc": [7, 8], "exp": [7, 8, 9], "1j": [7, 8, 9], "dual": [7, 9, 10], "0034083602476045": [7, 8], "quadrat": 7, "5000": 7, "real": 7, "indirect": [8, 11], "conduct": [8, 10], "thu": [8, 10], "determin": 8, "cross": [8, 9], "animate_complex": 8, "postprocess": 8, "receiv": 8, "each": 8, "node": [8, 9], "screen": [8, 10], "mesh_screen": 8, "fes_screen": 8, "e_screen": 8, "getpotenti": 8, "typic": 8, "far": 8, "pattern": 8, "deform": 8, "workplan": 8, "ax": 8, "rectanglec": 8, "converg": [8, 11], "low": 8, "frequenc": 8, "manufactur": [9, 10], "half": 9, "sourc": 9, "point": 9, "direct": [9, 11], "745": 9, "xm": 9, "g": [9, 10], "get": 9, "grid": 9, "everywher": 9, "mdir": 9, "jneu": 9, "block": 9, "feshdivn": 9, "free": 9, "feshcurld": 9, "prehdiv": 9, "prehcurl": 9, "preblock": 9, "3000": 9, "l_2": [9, 10], "gfdiv": 9, "021621506900978364": 9, "neuman": 9, "gfcurl": 9, "029447011579737066": 9, "theori": [9, 10], "lipschitz": 9, "referenc": 9, "paper": 9, "slightli": 9, "differ": [9, 10], "onli": [9, 10, 11], "theoret": 9, "stai": 9, "ng": 10, "high": [10, 11], "accuraci": 10, "depend": 10, "involv": 10, "page": 10, "some": 10, "present": 10, "analyt": 10, "solvabl": 10, "unkown": 10, "sequenc": 10, "subsequ": 10, "refin": 10, "absolut": 10, "analys": 10, "exemplarili": 10, "verifi": 10, "complet": 10, "cauchi": 10, "pde": 10, "its": 10, "besid": 10, "laplacian": 10, "decreas": 10, "vari": 10, "laplac": [10, 11], "mapsto": 10, "x_": 10, "unit": 10, "ball": 10, "solver": [10, 11], "size": 10, "sim": 10, "frac1n": 10, "As": 10, "kown": 10, "tabl": 10, "contain": 10, "64e": 10, "02": 10, "26e": 10, "434": 10, "17e": 10, "04": 10, "770": 10, "22e": 10, "13e": 10, "346": 10, "02e": 10, "03": 10, "776": 10, "37e": 10, "1378": 10, "70e": 10, "456": 10, "11e": 10, "914": 10, "85e": 10, "2054": 10, "86e": 10, "3650": 10, "82e": 10, "784": 10, "394": 10, "39e": 10, "1570": 10, "40e": 10, "3530": 10, "51e": 10, "6274": 10, "48e": 10, "1228": 10, "616": 10, "38e": 10, "2458": 10, "24e": 10, "5528": 10, "73e": 10, "9826": 10, "1922": 10, "963": 10, "04e": 10, "3846": 10, "44e": 10, "8651": 10, "47e": 10, "15378": 10, "52e": 10, "catch": 10, "mean": [10, 11], "number": 10, "unkonwn": 10, "59e": 10, "01": 10, "05e": 10, "576": 10, "66e": 10, "960": 10, "10e": 10, "1720": 10, "84e": 10, "516": 10, "1032": 10, "06e": 10, "49e": 10, "4560": 10, "15e": 10, "1368": 10, "00e": 10, "01e": 10, "08e": 10, "7840": 10, "2352": 10, "4704": 10, "09e": 10, "30e": 10, "1220": 10, "89e": 10, "3684": 10, "72e": 10, "7368": 10, "07e": 10, "12280": 10, "5766": 10, "21e": 10, "11532": 10, "19220": 10, "actual": 10, "mix": [10, 11], "onc": 10, "doe": 10, "why": 10, "geometr": 10, "run": 10, "out": 10, "repositori": 10, "folder": [10, 11], "you": [10, 11], "maxwel": [10, 11], "relev": 10, "offer": 10, "both": 10, "so": 10, "mie": 10, "seri": 10, "keep": 10, "neglig": 10, "oder": 10, "curvilinear": 10, "564": 10, "27e": 10, "1410": 10, "2632": 10, "4230": 10, "56e": 10, "722": 10, "1083": 10, "54e": 10, "2166": 10, "19e": 10, "5415": 10, "10108": 10, "34e": 10, "16245": 10, "1620": 10, "2430": 10, "36e": 10, "4860": 10, "42e": 10, "12150": 10, "14e": 10, "22680": 10, "33e": 10, "36450": 10, "2804": 10, "4206": 10, "79e": 10, "8412": 10, "21030": 10, "39256": 10, "93e": 10, "63180": 10, "diagram": 10, "show": 10, "requir": 10, "least": 10, "funciton": 10, "rao": 10, "wilton": 10, "glisson": 10, "rwg": 10, "represen": 10, "nabla_i": 10, "illustr": 10, "rectangular": 10, "place": 10, "taken": 10, "support": 11, "helmholtz": 11, "sauter": 11, "schwab": 11, "2009": 11, "base": 11, "algorithm": 11, "bebendorf": 11, "hierarch": 11, "matric": 11, "effici": 11, "2008": 11, "instal": 11, "recent": 11, "later": 11, "than": 11, "feb": 11, "2024": 11, "github": 11, "git": 11, "clone": 11, "http": 11, "com": 11, "weggler": 11, "cd": 11, "mkdir": 11, "cmake": 11, "make": 11, "j4": 11, "try": 11, "notebook": 11, "directli": 11, "fem": 11, "coupl": 11, "pec": 11, "bodi": 11, "bc": 11, "ho": 11}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"boundari": [0, 4], "integr": 0, "equat": 0, "maxwel": [0, 7, 8, 9], "notat": 0, "relev": 0, "trace": 0, "oper": 0, "space": 0, "pec": [0, 7, 8], "electr": 0, "field": 0, "direct": [0, 2, 5, 7], "ansatz": 0, "indirect": [0, 3, 6], "note": 0, "magnet": 0, "conclus": 0, "ng": [0, 11], "bem": [0, 1, 10, 11], "python": 0, "function": 0, "fem": 1, "coupl": 1, "laplac": [2, 3, 4, 5, 6], "solver": [2, 3, 5, 6, 7, 8, 9], "us": [2, 3, 5, 6, 7], "formul": [2, 3, 5, 6, 7], "dirichlet": [2, 3], "mix": [4, 9], "valu": 4, "neumann": [5, 6], "bodi": 8, "efi": 8, "bc": 9, "converg": 10, "rate": 10, "ho": 10, "welcom": 11}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})