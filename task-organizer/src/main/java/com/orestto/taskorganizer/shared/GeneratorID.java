package com.orestto.taskorganizer.shared;

import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Arrays;
import java.util.Random;

/**
 * Created by damiass on Nov, 2019
 */
public abstract class GeneratorID {

    private static final String CHARACTERS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoprstuvwxyz";
    private static final SecureRandom SECURE_TOURIST_ID = new SecureRandom();

    public String randomIdNotes(int length_ID) {
        return randomIDGenerator(length_ID);
    }



    private String randomIDGenerator(int length_ID) {
        StringBuilder sb = new StringBuilder(length_ID);
        for(int i=0; i<length_ID; i++) {
            sb.append(CHARACTERS.charAt(SECURE_TOURIST_ID.nextInt(CHARACTERS.length())));
        }
        return sb.toString();

    }





}
