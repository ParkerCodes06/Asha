import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { sitePhoneFull, sitePhone, siteEmail, siteAddress } from '../data/siteData';

export default function ContactInfo() {
  return (
    <div>
      <h3 style={{
        fontFamily: "'Fredoka One', cursive",
        fontSize: 34,
        color: '#2D3047',
        marginBottom: 20,
      }}>
        Contact Info
      </h3>

      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 15,
        marginBottom: 20,
      }}>
        <div style={{
          width: 50,
          height: 50,
          background: '#2196F3',
          borderRadius: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          <FaMapMarkerAlt style={{ color: '#fff', fontSize: 30 }} />
        </div>
        <div>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 26,
            color: '#696969',
            margin: 0,
          }}>
            {siteAddress}
          </p>
        </div>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 15,
        marginBottom: 20,
      }}>
        <div style={{
          width: 50,
          height: 50,
          background: '#4CAF50',
          borderRadius: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          <FaPhone style={{ color: '#fff', fontSize: 30 }} />
        </div>
        <div>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 26,
            color: '#696969',
            margin: 0,
          }}>
            {sitePhoneFull}
          </p>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 26,
            color: '#696969',
            margin: 0,
          }}>
            {sitePhone}
          </p>
        </div>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 15,
      }}>
        <div style={{
          width: 50,
          height: 50,
          background: '#C8962E',
          borderRadius: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          <FaEnvelope style={{ color: '#fff', fontSize: 30 }} />
        </div>
        <div>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 26,
            color: '#696969',
            margin: 0,
          }}>
            {siteEmail}
          </p>
        </div>
      </div>
    </div>
  );
}
