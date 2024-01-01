package models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
@jakarta.persistence.IdClass(models.FollowerPK.class)
public class Follower {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @jakarta.persistence.Column(name = "idBusinessUser")
    private int idBusinessUser;

    public int getIdBusinessUser() {
        return idBusinessUser;
    }

    public void setIdBusinessUser(int idBusinessUser) {
        this.idBusinessUser = idBusinessUser;
    }

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @jakarta.persistence.Column(name = "idClient")
    private int idClient;

    public int getIdClient() {
        return idClient;
    }

    public void setIdClient(int idClient) {
        this.idClient = idClient;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Follower follower = (Follower) o;

        if (idBusinessUser != follower.idBusinessUser) return false;
        if (idClient != follower.idClient) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idBusinessUser;
        result = 31 * result + idClient;
        return result;
    }
}
