
/*-------
organize WasteList
---------*/

import java.io.*;
import java.util.*;

public class Order {

    public ArrayList<String> wastes;
    
    public Order(String inputFile) {
	wastes = new ArrayList<String>();
	readList(inputFile);
    }

    
    public void readList(String inputFile){
	
	//transcribe maze from file into memory

	try {
	    BufferedReader sc = new BufferedReader( new FileReader(inputFile) );
	    String line;
	    while( ( line = sc.readLine()) != null) {
		boolean ad = true;
		String ine = line.toLowerCase();
		for (int y = 0; y < ine.length(); y++) {
		    if (ine.substring(y, y+1).equals(" ")) {
			ine = ine.substring(0, y) + ine.substring(y+1, ine.length());
		    }
		}
		for (int x = 0; x < wastes.size(); x++) {
		    if (ine.equals(wastes.get(x))) {
			ad = false;
		    }
		}
		if (ad == true) {
		    wastes.add(line);
		}
	    }
	} catch( Exception e ) { System.out.println( "Error reading file" ); }


    }

    public void print() {
	for (String x : wastes) {
	    System.out.println(x);
	}
    }
    
    public static void main(String args[]) {
	try {
	    String inputFile = args[0];
	    Order s = new Order(inputFile);
	    s.print();
	} catch (Exception e) {
	}



    }






}
