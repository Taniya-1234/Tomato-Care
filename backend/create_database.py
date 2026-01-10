"""
Database Setup Script
Run this once to create your treatment database
Usage: python create_database.py
"""

import sqlite3
import os

def create_database():
    """Create SQLite database from SQL file"""
    
    # File paths
    sql_file = 'treatment_database.sql'
    db_file = 'tomato_treatments.db'
    
    # Check if SQL file exists
    if not os.path.exists(sql_file):
        print(f"Error: {sql_file} not found!")
        print(f"   Please make sure treatment_database.sql is in the same folder as this script.")
        return False
    
    # Remove old database if exists
    if os.path.exists(db_file):
        print(f"Removing old database: {db_file}")
        os.remove(db_file)
    
    print(f"Creating database from {sql_file}...")
    
    try:
        # Connect to database (creates new file)
        conn = sqlite3.connect(db_file)
        cursor = conn.cursor()
        
        # Read SQL file
        with open(sql_file, 'r', encoding='utf-8') as f:
            sql_script = f.read()
        
        # Execute SQL script
        cursor.executescript(sql_script)
        conn.commit()
        
        print("Database created successfully!")
        
        # Verify database contents
        print("\nVerifying database contents...")
        
        cursor.execute("SELECT COUNT(*) FROM diseases")
        disease_count = cursor.fetchone()[0]
        print(f"Diseases: {disease_count}")
        
        cursor.execute("SELECT COUNT(*) FROM treatments")
        treatment_count = cursor.fetchone()[0]
        print(f"Treatments: {treatment_count}")
        
        cursor.execute("SELECT COUNT(*) FROM cultural_practices")
        practice_count = cursor.fetchone()[0]
        print(f"Cultural Practices: {practice_count}")
        
        cursor.execute("SELECT COUNT(*) FROM treatment_categories")
        category_count = cursor.fetchone()[0]
        print(f"Treatment Categories: {category_count}")
        
        cursor.execute("SELECT COUNT(*) FROM severity_levels")
        severity_count = cursor.fetchone()[0]
        print(f"Severity Levels: {severity_count}")
        
        # Show sample data
        print("\nSample diseases in database:")
        cursor.execute("SELECT disease_name FROM diseases LIMIT 5")
        for row in cursor.fetchall():
            print(f"   - {row[0]}")
        
        print(f"\nDatabase setup complete!")
        print(f"   Database file: {os.path.abspath(db_file)}")
        
        conn.close()
        return True
        
    except Exception as e:
        print(f"\nError creating database: {str(e)}")
        print(f"   Check your SQL file for syntax errors.")
        return False


if __name__ == "__main__":
    print("="*60)
    print("TOMATO TREATMENT DATABASE SETUP")
    print("="*60)
    print()
    
    success = create_database()
    
    if success:
        print("\n" + "="*60)
        print("SUCCESS! You can now use the database in your Flask app.")
        print("="*60)
    else:
        print("\n" + "="*60)
        print("Setup failed. Please fix the errors above and try again.")
        print("="*60)