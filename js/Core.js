const STATE_NUM = 2;

//**

var TRANSITION_TABLE = new Array(STATE_NUM);
var sum = 0;

for (var i1 = 0; i1 < STATE_NUM; i1++) {
	TRANSITION_TABLE[i1] = new Array(STATE_NUM);
	
	for (var i2 = 0; i2 < STATE_NUM; i2++) {
		TRANSITION_TABLE[i1][i2] = new Array(STATE_NUM);
		
		for (var i3 = 0; i3 < STATE_NUM; i3++) {
			TRANSITION_TABLE[i1][i2][i3] = new Array(STATE_NUM);
			
			for (var i4 = 0; i4 < STATE_NUM; i4++) {
				TRANSITION_TABLE[i1][i2][i3][i4] = new Array(STATE_NUM);
				
				for (var i5 = 0; i5 < STATE_NUM; i5++) {
					TRANSITION_TABLE[i1][i2][i3][i4][i5] = new Array(STATE_NUM);
					
					for (var i6 = 0; i6 < STATE_NUM; i6++) {
						TRANSITION_TABLE[i1][i2][i3][i4][i5][i6] = new Array(STATE_NUM);
						
						for (var i7 = 0; i7 < STATE_NUM; i7++) {
							TRANSITION_TABLE[i1][i2][i3][i4][i5][i6][i7] = new Array(STATE_NUM);
							
							for (var i8 = 0; i8 < STATE_NUM; i8++) {
								TRANSITION_TABLE[i1][i2][i3][i4][i5][i6][i7][i8] = new Array(STATE_NUM);
								
								for (var i9 = 0; i9 < STATE_NUM; i9++) {
									sum = i2 + i3 + i4 + i5 + i6 + i7 + i8 + i9;
									TRANSITION_TABLE[i1][i2][i3][i4][i5][i6][i7][i8][i9] = i1;
									
									if (i1 == 0 && sum == 3)
										TRANSITION_TABLE[i1][i2][i3][i4][i5][i6][i7][i8][i9] = 1;
									
									if (i1 == 1 && sum != 2 && sum != 3)
										TRANSITION_TABLE[i1][i2][i3][i4][i5][i6][i7][i8][i9] = 0;
								}
							}
						}
					}
				}
			}
		}
	}
}

const VON_NEUMANN_NEIGHBORHOOD_D1 = [ {x: 0,  y: 0  },
                                      {x: 0,  y: 1  },
                                      {x: 0,  y: -1 },
                                      {x: 1,  y: 0  },
                                      {x: -1, y: 0  },
				      {x: 1,  y: 1  },
				      {x: 1,  y: -1 },
				      {x: -1, y: 1  },
				      {x: -1, y: -1 } ];

function turnAutomaton(a) {
  var cTmp = new Array(a.m);
  
  for (var i = 0; i < a.m; i++) {
    cTmp[i] = new Array(a.n);
  }
  
  for (var i = 0; i < a.m; i++) {
    for (var j = 0; j < a.n; j++) {
      cTmp[i][j] = getTransition(a, i, j);
    }
  }
  
  a.c = cTmp;
}

function getTransition(a, x, y) {
  return a.transitionTable[ getC(a, x + VON_NEUMANN_NEIGHBORHOOD_D1[0].x, y + VON_NEUMANN_NEIGHBORHOOD_D1[0].y) ]
                          [ getC(a, x + VON_NEUMANN_NEIGHBORHOOD_D1[1].x, y + VON_NEUMANN_NEIGHBORHOOD_D1[1].y) ]
                          [ getC(a, x + VON_NEUMANN_NEIGHBORHOOD_D1[2].x, y + VON_NEUMANN_NEIGHBORHOOD_D1[2].y) ]
                          [ getC(a, x + VON_NEUMANN_NEIGHBORHOOD_D1[3].x, y + VON_NEUMANN_NEIGHBORHOOD_D1[3].y) ]
                          [ getC(a, x + VON_NEUMANN_NEIGHBORHOOD_D1[4].x, y + VON_NEUMANN_NEIGHBORHOOD_D1[4].y) ]
                          [ getC(a, x + VON_NEUMANN_NEIGHBORHOOD_D1[5].x, y + VON_NEUMANN_NEIGHBORHOOD_D1[5].y) ]
                          [ getC(a, x + VON_NEUMANN_NEIGHBORHOOD_D1[6].x, y + VON_NEUMANN_NEIGHBORHOOD_D1[6].y) ]
                          [ getC(a, x + VON_NEUMANN_NEIGHBORHOOD_D1[7].x, y + VON_NEUMANN_NEIGHBORHOOD_D1[7].y) ]
                          [ getC(a, x + VON_NEUMANN_NEIGHBORHOOD_D1[8].x, y + VON_NEUMANN_NEIGHBORHOOD_D1[8].y) ];
}

function getC(a, x, y) {
  if (x < 0 || x >= a.m || y < 0 || y >= a.n) {
    return 0;
  } else {
    return a.c[x][y];
  }
}

function automatonStr(a) {
	var s = ""
	for (var i = 0; i < a.m; i++) {
		for (var j = 0; j < a.n; j++) {
			s += a.c[i][j] + " "
		}
		
		s += "\n"
	}
	
	return s
}

/*function getI(x,  bound) {
  var res = x % bound;
  
  if (res < 0) {
    return res + bound;
  } else {
    return res;
  }
}*/

var a = { m: 16,
          n: 16,
          c: [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	       [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	       [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	       [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	       [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	       [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	       [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	       [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0 ],
	       [ 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0 ],
	       [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0 ],
	       [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	       [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	       [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	       [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	       [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	       [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ],
          transitionTable: TRANSITION_TABLE };

//turnAutomaton(a);
//javascript:alert(TRANSITION_TABLE);

