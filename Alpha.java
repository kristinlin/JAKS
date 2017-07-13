
/*-------
organize WasteList
---------*/

import java.io.*;
import java.util.*;

public class Alpha {

    public Word[]  wastes;
    
    public Alpha(String inputFile) {
	readList(inputFile);
	wastes = MergeSort.sort(wastes);
    }

    
    public void readList(String inputFile){
	

	try {
	    BufferedReader sc = new BufferedReader( new FileReader(inputFile) );
	    String line;
	    int x = 0;
	    ArrayList<Word> temp = new ArrayList<Word>();
	    while( ( line = sc.readLine()) != null) {
		temp.add(new Word(line));
		x++;
	    }
	    wastes = new Word[x];
	    x = 0;
	    for (Word t : temp) {
		wastes[x] = t;
		x++;
	    }
	} catch( Exception e ) { System.out.println( "Error reading file" ); }


    }

    public void print() {
	for (Word x : wastes) {
	    System.out.println(x);
	}
    }
    
    public static void main(String args[]) {
	try {
	    String inputFile = args[0];
	    Alpha s = new Alpha(inputFile);
	    s.print();
	} catch (Exception e) {
	}



    }






}
